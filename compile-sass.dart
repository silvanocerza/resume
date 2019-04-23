import 'dart:io';
import 'package:sass/sass.dart' as sass;

void compile(String input, File output, sass.OutputStyle style) {
  print(Process.runSync("clear", [], runInShell: true).stdout);
  try {
    var result = sass.compile(input, style: style, color: true);
    output.writeAsStringSync(result);
    print('Compilation successful!');
  } on sass.SassException catch (e) {
    print(e.toString());
  }
}

void main(List<String> args) {
  var input = File(args[0]);
  var output = File(args[1]);

  var style = args.contains("--minimize")
      ? sass.OutputStyle.compressed
      : sass.OutputStyle.expanded;

  compile(input.path, output, style);

  if (args.contains('--watch') || args.contains('-w')) {
    input.parent.watch(events: FileSystemEvent.modify).listen((e) {
      compile(input.path, output, style);
    });
  }
}
