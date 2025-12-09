import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ShieldCheck, Clock, Pill, AlertTriangle, Thermometer, Check } from "lucide-react";

export function Processing() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: ShieldCheck, text: "فحص أصالة الدواء", color: "text-blue-600" },
    { icon: Clock, text: "قراءة تاريخ الانتهاء", color: "text-green-600" },
    { icon: Pill, text: "التعرف على الاسم العلمي", color: "text-purple-600" },
    { icon: AlertTriangle, text: "فحص التداخلات الدوائية", color: "text-orange-600" },
    { icon: Thermometer, text: "تحليل شروط التخزين", color: "text-red-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => navigate("/results"), 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ShieldCheck className="w-12 h-12 text-white" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-blue-900">جارٍ تحليل الدواء...</h2>
          <p className="text-gray-600">يرجى الانتظار لحظات</p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-3 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                  isCurrent ? "bg-blue-50 border border-blue-200" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isCompleted
                      ? "bg-green-100"
                      : isCurrent
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                  ) : (
                    <Icon
                      className={`w-6 h-6 ${
                        isCurrent ? step.color : "text-gray-400"
                      }`}
                    />
                  )}
                </div>

                <div className="flex-1">
                  <p
                    className={`${
                      isCompleted || isCurrent
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.text}
                  </p>
                </div>

                {isCurrent && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex gap-1"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-green-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <p className="text-center text-gray-500 text-sm">
          سيتم عرض النتائج بعد لحظات...
        </p>
      </div>
    </div>
  );
}
