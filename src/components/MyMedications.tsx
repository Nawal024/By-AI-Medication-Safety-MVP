import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Plus,
  Search,
  Pill,
  Trash2,
  Edit,
  Clock,
  AlertTriangle,
} from "lucide-react";

export function MyMedications() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const medications = [
    {
      id: 1,
      tradeName: "بنادول أدفانس",
      scientificName: "Paracetamol",
      dosage: "500 ملغ",
      purpose: "مسكن للألم وخافض للحرارة",
      expiry: "12/2026",
      status: "valid",
    },
    {
      id: 2,
      tradeName: "جافيسكون",
      scientificName: "Alginate + Antacid",
      dosage: "10 مل",
      purpose: "علاج الحموضة وحرقة المعدة",
      expiry: "06/2025",
      status: "valid",
    },
    {
      id: 3,
      tradeName: "فيتامين د",
      scientificName: "Vitamin D3",
      dosage: "1000 وحدة",
      purpose: "مكمل غذائي",
      expiry: "02/2025",
      status: "expiring",
    },
  ];

  const filteredMedications = medications.filter(
    (med) =>
      med.tradeName.includes(searchQuery) ||
      med.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 pb-24">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="pt-4">
          <h2 className="text-blue-900 mb-2">أدويتي</h2>
          <p className="text-gray-600">
            إدارة قائمة الأدوية الخاصة بك
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="ابحث عن دواء..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 h-12 rounded-xl border-gray-300"
          />
        </div>

        {/* Add Medication Button */}
        <Button
          onClick={() => navigate("/scan-method")}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl"
        >
          <Plus className="w-5 h-5 ml-2" />
          إضافة دواء جديد
        </Button>

        {/* Medications List */}
        <div className="space-y-3">
          {filteredMedications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Pill className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-600">لا توجد أدوية مطابقة للبحث</p>
            </div>
          ) : (
            filteredMedications.map((med) => (
              <div
                key={med.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{med.tradeName}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {med.scientificName} • {med.dosage}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {med.purpose}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expiry Info */}
                <div
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    med.status === "expiring"
                      ? "bg-orange-50 border border-orange-200"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {med.status === "expiring" ? (
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-600" />
                    )}
                    <span
                      className={`text-sm ${
                        med.status === "expiring"
                          ? "text-orange-900"
                          : "text-gray-600"
                      }`}
                    >
                      ينتهي في:
                    </span>
                  </div>
                  <Badge
                    className={
                      med.status === "expiring"
                        ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                        : "bg-green-100 text-green-700 hover:bg-green-100"
                    }
                  >
                    {med.expiry}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-10 border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
                  >
                    <Edit className="w-4 h-4 ml-1" />
                    تعديل
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-10 border-gray-300 hover:border-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4 ml-1" />
                    حذف
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Box */}
        {filteredMedications.length > 0 && (
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">💡</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  يساعدك حفظ قائمة أدويتك على اكتشاف التداخلات الدوائية تلقائياً
                  عند فحص أدوية جديدة
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
