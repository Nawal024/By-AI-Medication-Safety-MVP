import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Camera as CameraIcon, Zap, ZapOff, RotateCcw, Check } from "lucide-react";

export function Camera() {
  const navigate = useNavigate();
  const [flashOn, setFlashOn] = useState(false);
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    setCaptured(true);
  };

  const handleRetake = () => {
    setCaptured(false);
  };

  const handleConfirm = () => {
    navigate("/processing");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gradient-to-b from-black/50 to-transparent text-white z-10">
        <h3 className="text-center">التقاط صورة الدواء</h3>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Camera Placeholder with Grid */}
        <div className="relative w-full h-full bg-gray-800">
          {/* Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>

          {/* Center Focus Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full max-w-sm aspect-[3/4] border-4 border-blue-400 rounded-3xl">
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-blue-400 rounded-tr-lg" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-blue-400 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-blue-400 rounded-br-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-blue-400 rounded-bl-lg" />
            </div>
          </div>

          {/* Flash Indicator */}
          {flashOn && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span>الفلاش مفعّل</span>
            </div>
          )}

          {/* Captured Indicator */}
          {captured && (
            <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
              <div className="bg-green-500 text-white px-6 py-3 rounded-2xl flex items-center gap-2">
                <Check className="w-6 h-6" />
                <span>تم الالتقاط</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-md mx-auto bg-blue-600/90 text-white p-4 rounded-2xl text-center mb-4">
          <p className="leading-relaxed">
            وجّه الكاميرا نحو عبوة الدواء وتأكد من وضوح النصوص والباركود
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-md mx-auto space-y-4">
          {!captured ? (
            <div className="flex items-center justify-center gap-8">
              {/* Flash Toggle */}
              <button
                onClick={() => setFlashOn(!flashOn)}
                className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                {flashOn ? (
                  <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ) : (
                  <ZapOff className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Capture Button */}
              <button
                onClick={handleCapture}
                className="w-20 h-20 bg-white rounded-full border-4 border-blue-500 shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full" />
              </button>

              <div className="w-14 h-14" /> {/* Spacer for symmetry */}
            </div>
          ) : (
            <div className="flex gap-3">
              <Button
                onClick={handleRetake}
                variant="outline"
                className="flex-1 h-14 bg-white/20 hover:bg-white/30 border-2 border-white text-white rounded-xl"
              >
                <RotateCcw className="w-5 h-5 ml-2" />
                إعادة التصوير
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl"
              >
                <Check className="w-5 h-5 ml-2" />
                تأكيد
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
