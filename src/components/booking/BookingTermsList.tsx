"use client";

import {
  FiCheckCircle,
  FiZap,
  FiShield,
  FiHome,
  FiSmile,
  FiTruck,
  FiTrash2,
  FiFileText,
  FiCoffee,
  FiList,
} from "react-icons/fi";

export interface BookingCondition {
  id: number;
  title: string;
  detail: string;
  extraCharge?: string;
  icon?: React.ElementType;
}

const bookingConditions: BookingCondition[] = [
  {
    id: 1,
    title: "गार्डन डेकोरेशन एवं एल.ई.डी. लाइट",
    detail: "गार्डन व गार्डन का डेकोरेशन, गार्डन में 70 एल.ई.डी. लाइट व्यवस्था शामिल है।",
    extraCharge: "एक्स्ट्रा एल.ई.डी. लाइट लगाने पर अलग से चार्ज लगेगा।",
    icon: FiZap,
  },
  {
    id: 2,
    title: "डेकोरेशन पोल एवं हूम लाइट",
    detail: "गार्डन में 30 फीट की रस्सी, 6 हूम लाइट के साथ व 6 डेकोरेशन पोल प्रदान किए जाएंगे।",
    icon: FiCheckCircle,
  },
  {
    id: 3,
    title: "स्टेज एवं फ्लावर डेकोरेशन",
    detail: "स्टेज आर्टिफिशियल फूलों के डेकोरेशन के साथ तथा 1 काउच शामिल है।",
    extraCharge: "एक अतिरिक्त काउच के 1,000/- रुपये अलग से देने होंगे।",
    icon: FiSmile,
  },
  {
    id: 4,
    title: "रेड कारपेट, राजस्थानी लाइटिंग, चेयर व डी.जे. साउंड",
    detail:
      "रेड कारपेट एंट्री व स्टेज पे कोठी पर राजस्थानी एल.ई.डी. डेकोरेशन, 50 टेबल, 200 प्लास्टिक कुर्सी, डी.जे. साउंड विद फ्लोर शामिल है।",
    extraCharge: "डी.जे. साउंड की समय सीमा: शाम 6:00 बजे से रात 10:00 बजे तक।",
    icon: FiCheckCircle,
  },
  {
    id: 5,
    title: "जनरेटर एवं डीजल सुविधा",
    detail: "जनरेटर संचालन हेतु डीजल 5 घंटे तक फ्री दिया जाएगा।",
    extraCharge: "5 घंटे के पश्चात 90/- रुपये प्रति लीटर के हिसाब से अलग से चार्ज होगा।",
    icon: FiZap,
  },
  {
    id: 6,
    title: "सफाई एवं डेकोरेशन सुरक्षा नियम",
    detail:
      "गार्डन को साफ रखने की जिम्मेदारी स्वयं बुकिंग करने वाले की होगी। गार्डन में जो डेकोरेशन है उसमें गार्डन वाले के द्वारा कोई छेड़छाड़ नहीं की जायेगी।",
    icon: FiShield,
  },
  {
    id: 7,
    title: "ट्री लाइट, बर्तन धोने का पानी व पार्किंग",
    detail:
      "गार्डन के कुछ पेड़ों में एल.ई.डी. लाइट, बर्तन धोने के लिए पानी की व्यवस्था, स्टेज पर सेटिंग व 4 मूल नाडिया तथा 2 पार्किंग गार्ड उपलब्ध रहेंगे।",
    icon: FiCheckCircle,
  },
  {
    id: 8,
    title: "कोठी की सफाई सुविधा",
    detail: "कोठी की सफाई सुबह इस्तेमाल के समय दी जायेगी।",
    extraCharge: "सफाई का चार्ज 1,500/- रुपये अलग से होगा।",
    icon: FiTrash2,
  },
  {
    id: 9,
    title: "कोठी बिजली मीटर रीडिंग एवं चार्ज",
    detail:
      "कोठी की लाइट का चार्ज 20/- रुपये प्रति यूनिट के हिसाब से देना होगा। गार्डन के रखरखाव हेतु मीटर की रीडिंग लेने की जिम्मेदारी स्वयं पार्टी की होगी।",
    icon: FiZap,
  },
  {
    id: 10,
    title: "स्टेज सोफा, चेयर, टेंट चरी एवं ग्रीन नेट",
    detail:
      "स्टेज के आगे 2 सीटर वाले 4 सोफा, 50 ऊन वाली कुर्सी बिना कवर के, टेंट की चरी 10 पीस कमरे के लिए एवं ग्रीन नेट 20 पीस दी जाएगी।",
    extraCharge:
      "कुर्सी के कवर के 10/- रुपये प्रति पीस अलग से होंगे। ग्रीन नेट जिस कंडीशन में ली है, उसी कंडीशन में लौटानी होगी।",
    icon: FiCheckCircle,
  },
  {
    id: 11,
    title: "कमरे, हॉल एवं किचन सुविधा",
    detail:
      "गार्डन में कुल 3 रूम, एक हॉल व एक किचन की व्यवस्था दी जाएगी।",
    extraCharge: "अतिरिक्त रूम खुलवाने पर 500/- रुपये प्रति रूम अलग से चार्ज देना होगा।",
    icon: FiHome,
  },
];

export default function BookingTermsList() {
  return (
    <div className="space-y-4 sm:space-y-6 my-8">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[var(--border)]">
        <div className="p-2.5 rounded-xl bg-[var(--primary)] text-[var(--accent-light)]">
          <FiList className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--primary-dark)]">
            गार्डन बुकिंग की 11 शर्तें एवं सुविधाएं
          </h2>
          <p className="text-xs sm:text-sm text-muted-custom">
            ₹41,000/- बेस गार्डन बुकिंग में शामिल नियम एवं जानकारी
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {bookingConditions.map((item) => {
          const IconComponent = item.icon || FiCheckCircle;
          return (
            <div
              key={item.id}
              className="relative bg-card-custom rounded-2xl p-5 sm:p-6 border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--accent)]/50 transition-all duration-200 flex flex-col sm:flex-row gap-4 items-start"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--primary-dark)] text-[var(--accent-light)] font-serif font-bold text-lg shadow-md border border-[var(--accent)]/30">
                {item.id}
              </div>

              {/* Content Body */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <IconComponent className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[var(--primary-dark)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-main leading-relaxed">
                  {item.detail}
                </p>

                {item.extraCharge && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs sm:text-sm font-medium">
                    <span className="font-bold text-amber-700">नोट / एक्स्ट्रा चार्ज:</span>
                    <span>{item.extraCharge}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
