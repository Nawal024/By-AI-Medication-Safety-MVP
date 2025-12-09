import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  AlertTriangle,
  Clock,
  ShieldAlert,
  Thermometer,
  CheckCircle2,
  X,
} from "lucide-react";

export function Alerts() {
  // Mock data
  const alerts = [
    {
      id: 1,
      type: "interaction",
      severity: "high",
      icon: AlertTriangle,
      title: "تداخل دوائي خطير",
      message: "تم اكتشاف تداخل بين بنادول أدفانس ووارفارين. يُنصح باستشارة الطبيب.",
      time: "منذ ساعتين",
      read: false,
    },
    {
      id: 2,
      type: "expiring",
      severity: "medium",
      icon: Clock,
      title: "دواء قريب الانتهاء",
      message: "فيتامين د سينتهي خلال شهرين (02/2025). فكر في شراء عبوة جديدة.",
      time: "منذ 5 ساعات",
      read: false,
    },
    {
      id: 3,
      type: "storage",
      severity: "medium",
      icon: Thermometer,
      title: "تحذير تخزين",
      message: "درجة الحرارة مرتفعة. تأكد من حفظ الأدوية في مكان بارد ومظلل.",
      time: "منذ يوم",
      read: false,
    },
    {
      id: 4,
      type: "counterfeit",
      severity: "high",
      icon: ShieldAlert,
      title: "دواء مشتبه",
      message: "تم الكشف عن علامات تدل على احتمال تقليد الدواء. لا تستخدمه.",
      time: "منذ 3 أيام",
      read: true,
    },
  ];

  const unreadCount = alerts.filter((alert) => !alert.read).length;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: "bg-red-100 text-red-600",
          badge: "bg-red-100 text-red-700",
        };
      case "medium":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          icon: "bg-orange-100 text-orange-600",
          badge: "bg-orange-100 text-orange-700",
        };
      default:
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "bg-blue-100 text-blue-600",
          badge: "bg-blue-100 text-blue-700",
        };
    }
  };

  return (
    <div className="min-h-screen p-6 pb-24">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-blue-900">التنبيهات</h2>
            {unreadCount > 0 && (
              <Badge className="bg-red-500 text-white hover:bg-red-500">
                {unreadCount} جديد
              </Badge>
            )}
          </div>
          <p className="text-gray-600">
            تنبيهات مهمة حول أدويتك
          </p>
        </div>

        {/* Mark All as Read */}
        {unreadCount > 0 && (
          <Button
            variant="outline"
            className="w-full h-10 border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 rounded-xl"
          >
            <CheckCircle2 className="w-4 h-4 ml-2" />
            تحديد الكل كمقروء
          </Button>
        )}

        {/* Alerts List */}
        <div className="space-y-3">
          {alerts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">لا توجد تنبيهات</h3>
              <p className="text-gray-600">جميع أدويتك آمنة وصالحة</p>
            </div>
          ) : (
            alerts.map((alert) => {
              const Icon = alert.icon;
              const colors = getSeverityColor(alert.severity);

              return (
                <div
                  key={alert.id}
                  className={`relative rounded-2xl shadow-md border-2 p-5 space-y-3 transition-all ${
                    alert.read
                      ? "bg-white border-gray-200 opacity-60"
                      : `${colors.bg} ${colors.border}`
                  }`}
                >
                  {/* Unread Indicator */}
                  {!alert.read && (
                    <div className="absolute top-3 left-3 w-3 h-3 bg-blue-600 rounded-full" />
                  )}

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-gray-900 flex-1">{alert.title}</h3>
                        <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        {alert.message}
                      </p>
                      <p className="text-gray-500 text-sm">{alert.time}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600">💡</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                سيتم إرسال تنبيهات فورية عند اكتشاف أي مشكلة في الأدوية الخاصة
                بك أثناء الفحص
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
