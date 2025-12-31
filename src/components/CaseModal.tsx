import { X } from "lucide-react";
import { CaseStudy } from "../types";

type Props = {
  caseStudy: CaseStudy;
  onClose: () => void;
};

export default function CaseModal({ caseStudy, onClose }: Props) {
  const DashboardComponent = caseStudy.component;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[95vw] h-[90vh] sm:max-w-[95vw] sm:h-[95vh] bg-gradient-to-br from-[#0a0e1a] to-[#141829] rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30">
        {caseStudy.hideModalHeader ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-[10002] p-2 bg-red-600/80 hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-110"
            aria-label="Cerrar dashboard"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        ) : (
          <div className="sticky top-0 z-[10001] bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 border-b border-purple-500/30 flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                Dashboard - {caseStudy.title}
              </h2>
              <p className="text-xs sm:text-sm text-purple-300">
                {caseStudy.modalDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-110"
              aria-label="Cerrar dashboard"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        )}

        <div
          className={`w-full h-full overflow-y-auto bg-[#0a0e1a] ${
            caseStudy.hideModalHeader
              ? ""
              : "h-[calc(90vh-80px)] sm:h-[calc(95vh-100px)] p-2 sm:p-8"
          }`}
        >
          <DashboardComponent />
        </div>
      </div>
    </div>
  );
}
