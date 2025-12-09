import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Camera, Image, FileText, ArrowRight } from "lucide-react";

export function ScanMethod() {
  const navigate = useNavigate();

  const methods = [
    {
      icon: Camera,
      title: "التقاط صورة للدواء",
      description: "استخدم الكاميرا لتصوير عبوة الدواء مباشرة",
      color: "from-blue-600 to-blue-500",
      action: () => navigate("/camera"),
    },
    {
      icon: Image,
      title: "رفع صورة من المعرض",
      description: "اختر صورة موجودة من معرض الصور",
      color: "from-green-600 to-green-500",
      action: () => {
        // Simulate image upload and go to processing
        navigate("/processing");
      },
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-8 pb-4">
          <h2 className="text-blue-900">اختر طريقة الفحص</h2>
          <p className="text-gray-600">
            كيف تريد إضافة معلومات الدواء؟
          </p>
        </div>

        {/* Methods */}
        <div className="space-y-4">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <button
                key={index}
                onClick={method.action}
                className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all active:scale-[0.98] group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Manual Entry */}
        <div className="pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/medications")}
            className="w-full h-12 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-xl text-gray-700 hover:text-blue-700"
          >
            <FileText className="w-5 h-5 ml-2" />
            إضافة الدواء يدويًا
          </Button>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mt-8">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600">💡</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                للحصول على أفضل نتائج، تأكد من وضوح النصوص والباركود على عبوة الدواء
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
