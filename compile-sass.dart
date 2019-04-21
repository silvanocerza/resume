import 'dart:io';
import 'package:sass/sass.dart' as sass;

void main(List<String> args) {
  var input = File(args[0]);
  var output = File(args[1]);

  var style = args.contains("--minimize")
      ? sass.OutputStyle.compressed
      : sass.OutputStyle.expanded;

  if (args.contains('--watch') || args.contains('-w')) {
    input.watch(events: FileSystemEvent.modify).listen((e) {
      var result = sass.compile(e.path, style: style);
      output.writeAsStringSync(result);
    });
    return;
  }

  var result = sass.compile(input.path, style: style);
  output.writeAsStringSync(result);
}
