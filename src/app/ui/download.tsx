import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Download() {
  return (
    <div className="flex justify-center print:hidden">
      <button
        className="
        p-1
        m-2
        mt-4
        border-0
        rounded
        text-gray-500
        font-semibold
        text-4xl
        whitespace-nowrap
        cursor-pointer
        hover:bg-[#d9d9d9]
        bg-[#ededed]
        "
      >
        <FontAwesomeIcon icon={["fas", "file-pdf"]} className="fa-fw" />
        Download PDF
      </button>
    </div>
  );
}
