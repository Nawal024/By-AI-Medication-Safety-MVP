import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ShieldCheck,
  Clock,
  Pill,
  AlertTriangle,
  Thermometer,
  Heart,
  RotateCcw,
  Plus,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

export function Results() {
  const navigate = useNavigate();

  // Mock data
  const medicationData = {
    authenticity: { status: "authentic", confidence: 95 },
    expiry: { date: "12/2026", status: "valid", daysRemaining: 365 },
    info: {
      tradeName: "بنادول أدفانس",
      scientificName: "Paracetamol",
      dosage: "500 ملغ",
      form: "أقراص",
    },
    interactions: [
      { drug: "وارفارين", severity: "high", alternative: "تايلينول" },
    ],
    storage: {
      temperature: "أقل من 25 درجة",
      sunlight: "يحفظ بعيداً عن أشعة الشمس",
      warning: true,
    },
  };

  return (
    <div className="min-h-screen p-6 pb-24">
      <div className="max-w-md mx-auto space-y-4">
        {/* Header */}
        <div className="text-center space-y-2 pt-4 pb-2">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-green-600" strokeWidth={2.5} />
          </div>
          <h2 className="text-blue-900">نتائج التحليل</h2>
          <p className="text-gray-600">تم فحص الدواء بنجاح</p>
        </div>

        {/* Card 1 - Authenticity */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900">أصالة الدواء</h3>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              أصلي
            </Badge>
          </div>
          <p className="text-gray-700 leading-relaxed">
            الدواء أصلي ومعتمد. تم التحقق من العبوة والباركود والعلامات الأمنية
            بنسبة ثقة {medicationData.authenticity.confidence}%
          </p>
        </div>

        {/* Card 2 - Expiry Date */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900">تاريخ الصلاحية</h3>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              صالح
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">تاريخ الانتهاء:</span>
              <span className="text-gray-900">{medicationData.expiry.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الأيام المتبقية:</span>
              <span className="text-green-600">
                {medicationData.expiry.daysRemaining} يوم
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 - Medication Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Pill className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h3 className="text-gray-900">معلومات الدواء</h3>
            </div>
          </div>
          <div className="space-y-2 bg-gray-50 p-4 rounded-xl">
            <div className="flex justify-between">
              <span className="text-gray-600">الاسم التجاري:</span>
              <span className="text-gray-900">
                {medicationData.info.tradeName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">الاسم العلمي:</span>
              <span className="text-gray-900">
                {medicationData.info.scientificName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">الجرعة:</span>
              <span className="text-gray-900">{medicationData.info.dosage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">الشكل الدوائي:</span>
              <span className="text-gray-900">{medicationData.info.form}</span>
            </div>
          </div>
        </div>

        {/* Card 4 - Drug Interactions */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-gray-900">التداخلات الدوائية</h3>
              </div>
            </div>
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              تحذير
            </Badge>
          </div>
          {medicationData.interactions.map((interaction, index) => (
            <div
              key={index}
              className="bg-red-50 border border-red-200 p-4 rounded-xl space-y-2"
            >
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-900">
                  تداخل خطير مع دواء <strong>{interaction.drug}</strong>
                </p>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm">
                    البديل الآمن المقترح:
                  </p>
                  <p className="text-green-700">{interaction.alternative}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card 5 - Storage */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Thermometer className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="text-gray-900">شروط التخزين</h3>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{medicationData.storage.temperature}</p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{medicationData.storage.sunlight}</p>
            </div>
          </div>
          {medicationData.storage.warning && (
            <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg">
              <p className="text-orange-900 leading-relaxed">
                ⚠️ <strong>تحذير خاص بموسم الحج:</strong> تجنب تعريض الدواء
                لدرجات الحرارة العالية. احتفظ به في مكان بارد ومظلل.
              </p>
            </div>
          )}
        </div>

        {/* Card 6 - Health Recommendations */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg border border-blue-200 p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900">توصيات صحية</h3>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>تناول الدواء مع الماء بعد الطعام</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>لا تتجاوز 4 أقراص في اليوم</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>اشرب كميات كافية من الماء خلال الحج</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>استشر الطبيب في حال استمرار الأعراض</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            onClick={() => navigate("/scan-method")}
            variant="outline"
            className="flex-1 h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl"
          >
            <RotateCcw className="w-5 h-5 ml-2" />
            إعادة الفحص
          </Button>
          <Button
            onClick={() => navigate("/medications")}
            className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl"
          >
            <Plus className="w-5 h-5 ml-2" />
            إضافة لأدويتي
          </Button>
        </div>
      </div>
    </div>
  );
}
