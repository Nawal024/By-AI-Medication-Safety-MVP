import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ShieldCheck, Scan, Clock, AlertTriangle } from "lucide-react";

export function Welcome() {
  const navigate = useNavigate();

  const features = [
    { icon: ShieldCheck, text: "التحقق من أصالة الدواء" },
    { icon: Clock, text: "فحص تاريخ الصلاحية" },
    { icon: AlertTriangle, text: "كشف التداخلات الدوائية" },
    { icon: Scan, text: "تحليل فوري بالذكاء الاصطناعي" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="space-y-4">
  <div className="w-24 h-25 mx-auto rounded-3xl flex items-center justify-center shadow-xl overflow-hidden">
              <img
      src="/logo.png"
      alt="App Logo"
      className="w-full h-full object-cover"
    />
  </div>
          <div>
            <h1 className="text-blue-900 mb-2">دوائي آمن — SafeMeds</h1>
            <p className="text-gray-600">
              تطبيق ذكي لفحص وتحليل الأدوية
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 py-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <p className="text-gray-700 leading-relaxed">
            صوّر عبوة الدواء واحصل على تحليل شامل فوري يشمل التحقق من الأصالة،
            الصلاحية، التداخلات الدوائية، وشروط التخزين المناسبة
          </p>
        </div>

        {/* Start Button */}
        <Button
          onClick={() => navigate("/scan-method")}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-2xl shadow-lg text-lg"
        >
          ابدأ الفحص الآن
        </Button>

        <p className="text-gray-500 text-sm">
          خدمة مجانية لحجاج بيت الله الحرام
        </p>
      </div>
    </div>
  );
}
