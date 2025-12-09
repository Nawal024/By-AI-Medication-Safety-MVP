import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import {
  User,
  Globe,
  Cloud,
  Bell,
  Info,
  ChevronLeft,
  Mail,
  Phone,
} from "lucide-react";

export function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [cloudSyncEnabled, setCloudSyncEnabled] = useState(false);

  return (
    <div className="min-h-screen p-6 pb-24">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="pt-4">
          <h2 className="text-blue-900 mb-2">الإعدادات</h2>
          <p className="text-gray-600">
            إدارة حسابك وتفضيلات التطبيق
          </p>
        </div>

        {/* User Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-gray-900">البيانات الشخصية</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-700 text-sm mb-2 block">الاسم</label>
              <Input
                type="text"
                placeholder="أدخل اسمك"
                defaultValue="محمد أحمد"
                className="h-11 rounded-lg"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-2 block flex items-center gap-2">
                <Mail className="w-4 h-4" />
                البريد الإلكتروني
              </label>
              <Input
                type="email"
                placeholder="example@email.com"
                defaultValue="mohamed@email.com"
                className="h-11 rounded-lg"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-2 block flex items-center gap-2">
                <Phone className="w-4 h-4" />
                رقم الجوال
              </label>
              <Input
                type="tel"
                placeholder="+966 5X XXX XXXX"
                defaultValue="+966 50 123 4567"
                className="h-11 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* App Settings */}
        <div className="space-y-3">
          {/* Language */}
          <button className="w-full bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-900">اللغة</p>
                  <p className="text-gray-600 text-sm">العربية</p>
                </div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-900">التنبيهات</p>
                  <p className="text-gray-600 text-sm">
                    {notificationsEnabled ? "مفعّلة" : "معطّلة"}
                  </p>
                </div>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
          </div>

          {/* Cloud Sync */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-900">المزامنة مع السحابة</p>
                  <p className="text-gray-600 text-sm">
                    {cloudSyncEnabled ? "مفعّلة" : "معطّلة"}
                  </p>
                </div>
              </div>
              <Switch
                checked={cloudSyncEnabled}
                onCheckedChange={setCloudSyncEnabled}
              />
            </div>
          </div>

          {/* About */}
          <button className="w-full bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-900">عن التطبيق</p>
                  <p className="text-gray-600 text-sm">الإصدار 1.0.0</p>
                </div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        </div>

        {/* Save Button */}
        <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl">
          حفظ التغييرات
        </Button>

        {/* App Info */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg border border-blue-200 p-5 space-y-2">
          <h3 className="text-gray-900">دوائي آمن — SafeMeds</h3>
          <p className="text-gray-700 leading-relaxed">
            تطبيق ذكي يستخدم الذكاء الاصطناعي لفحص الأدوية وضمان سلامة الحجاج.
            تم تطويره خصيصاً لخدمة ضيوف الرحمن.
          </p>
          <p className="text-gray-600 text-sm pt-2">
            © 2024 جميع الحقوق محفوظة
          </p>
        </div>

        {/* Support */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">هل تحتاج مساعدة؟</p>
          <Button
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl"
          >
            تواصل مع الدعم الفني
          </Button>
        </div>
      </div>
    </div>
  );
}
