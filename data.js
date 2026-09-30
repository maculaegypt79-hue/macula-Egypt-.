// بيانات المشاهير و الفنانين المتعاقدين مع Macula Egypt
const TALENTS = [
  {
    slug: "hanan-motawie",
    name: "Hanan Motawie",
    nameAr: "حنان مطاوع",
    role: "Artist – Egyptian Actress",
    roleAr: "فنانة وممثلة مصرية",
    photo: "assets/hanan-motawie-thumb.jpg",
    cover: "assets/hanan-motawie-full.jpg",
    featured: true,
    stats: [
      { label: "Views on all platforms", value: "61M+" },
      { label: "Instagram Followers", value: "2.1M" },
      { label: "Facebook Followers", value: "1.1M" }
    ],
    bio: "الفنانة حنان مطاوع من أبرز الوجوه الفنية اللي بتتعاون معانا في ماكولا إيجيبت، بنتولى إدارة حساباتها وصناعة المحتوى الخاص بيها على السوشيال ميديا، وحققنا معاها أكتر من 61 مليون مشاهدة على كل المنصات."
  },
  {
    slug: "sabrien",
    name: "Sabrien",
    nameAr: "صابرين",
    role: "Super Star",
    roleAr: "سوبر ستار",
    photo: "assets/sabrien-thumb.jpg",
    featured: true,
    bio: "الفنانة صابرين من أهم النجوم اللي انضمت لعائلة ماكولا إيجيبت، بنعمل معاها استراتيجية محتوى متكاملة على كل منصات السوشيال ميديا عشان توصل لأكبر عدد من الجمهور."
  },
  {
    slug: "mariam-amin",
    name: "Mariam Amin",
    nameAr: "مريم أمين",
    role: "TV & Radio Presenter",
    roleAr: "مذيعة تليفزيون وراديو",
    photo: "assets/mariam-amin-thumb.jpg",
    featured: true,
    bio: "الإعلامية مريم أمين، مقدمة برامج تليفزيون وراديو، بنتولى معاها إدارة الحضور الرقمي وصناعة محتوى احترافي يعكس شخصيتها الإعلامية المميزة."
  },
  {
    slug: "vivian-farid",
    name: "Vivian Farid",
    nameAr: "فيفيان فريد",
    role: "Chef & Content Creator",
    roleAr: "شيف وصانعة محتوى",
    photo: "assets/vivian-farid-thumb.jpg",
    featured: true,
    bio: "الشيف فيفيان فريد، صانعة محتوى الطبخ الأشهر، بنتعاون معاها في إنتاج وتسويق محتواها الرقمي وبناء جمهورها على مختلف المنصات."
  },
  {
    slug: "heba-elgarhi",
    name: "Heba El.Garhi",
    nameAr: "هبة الجارحي",
    role: "Content Creator",
    roleAr: "صانعة محتوى",
    photo: "assets/heba-elgarhi-thumb.jpg",
    featured: true,
    stats: [
      { label: "Views on all platforms", value: "100M+" }
    ],
    bio: "هبة الجارحي حققت معانا في ماكولا إيجيبت رقم قياسي بأكتر من 100 مليون مشاهدة على كل منصات السوشيال ميديا، بفضل خطة محتوى واستراتيجية تسويق رقمي متكاملة."
  },
  {
    slug: "asma-kandeel",
    name: "Asma Kandeel",
    nameAr: "أسماء قنديل",
    role: "Super Star",
    roleAr: "سوبر ستار",
    photo: "assets/asma-kandeel-thumb.jpg",
    featured: true,
    bio: "الإعلامية أسماء قنديل من نجوم ماكولا إيجيبت، بنشتغل سوا على إدارة المحتوى والحضور الإعلامي والرقمي بشكل احترافي ومتكامل."
  },
  {
    slug: "passant-shawky",
    name: "Passant Shawky",
    nameAr: "باسنت شوقي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/passant-shawky-thumb.jpg",
    bio: "باسنت شوقي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن باقة النجوم اللي بنقدملهم خدمات الترند وإدارة السوشيال ميديا وخطة المحتوى الاستراتيجية."
  },
  {
    slug: "rasha-mahdi",
    name: "Rasha Mahdi",
    nameAr: "رشا مهدي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/rasha-mahdi-thumb.jpg",
    bio: "رشا مهدي من النجوم اللي بتتعاون مع ماكولا إيجيبت في الترند والإنتاج الإعلامي وإدارة المحتوى الرقمي."
  },
  {
    slug: "malak-koura",
    name: "Malak Koura",
    nameAr: "ملك كورة",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/malak-koura-thumb.jpg",
    bio: "ملك كورة ضمن نجوم ماكولا إيجيبت اللي بنقدملهم خدمات الإنتاج الإعلامي وإدارة وخطط استراتيجية السوشيال ميديا."
  },
  {
    slug: "shimaa-elsebaey",
    name: "Shimaa Elsebaey",
    nameAr: "شيماء السبعاوي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/shimaa-elsebaey-thumb.jpg",
    bio: "شيماء السبعاوي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن باقة خدمات الترند وإدارة المحتوى."
  },
  {
    slug: "sohair-goda",
    name: "Sohair Goda",
    nameAr: "سهير جودة",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/sohair-goda-thumb.jpg",
    bio: "سهير جودة من نجوم ماكولا إيجيبت اللي بنشتغل معاهم على الإنتاج الإعلامي وإدارة السوشيال ميديا."
  },
  {
    slug: "bosy-shalaby",
    name: "Bosy Shalaby",
    nameAr: "بوسي شلبي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/bosy-shalaby-thumb.jpg",
    bio: "بوسي شلبي من الوجوه المتعاونة مع ماكولا إيجيبت في خطط الترند والمحتوى الاستراتيجي."
  },
  {
    slug: "lamiaa-fahmy",
    name: "Lamiaa Fahmy",
    nameAr: "لمياء فهمي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/lamiaa-fahmy-thumb.jpg",
    bio: "لمياء فهمي من نجوم ماكولا إيجيبت اللي بنتولى معاهم إدارة الحضور الرقمي والمحتوى."
  },
  {
    slug: "elham-wagdi",
    name: "Elham Wagdi",
    nameAr: "إلهام وجدي",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/elham-wagdi-thumb.jpg",
    bio: "إلهام وجدي من الوجوه المتعاونة مع ماكولا إيجيبت ضمن خدمات الترند وإدارة السوشيال ميديا."
  },
  {
    slug: "maged-elkedwany",
    name: "Maged El-Kedwany",
    nameAr: "ماجد الكدواني",
    role: "Actor",
    roleAr: "ممثل",
    photo: "assets/maged-elkedwany-thumb.jpg",
    bio: "الفنان ماجد الكدواني من نجوم ماكولا إيجيبت، بنتولى جوانب من الإنتاج الإعلامي والحضور الرقمي الخاص بيه."
  },
  {
    slug: "mai-farouk",
    name: "Mai Farouk",
    nameAr: "مي فاروق",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/mai-farouk-thumb.jpg",
    bio: "مي فاروق من نجوم ماكولا إيجيبت اللي بنشتغل معاهم على استراتيجية المحتوى وإدارة السوشيال ميديا."
  },
  {
    slug: "khaled-selim",
    name: "Khaled Selim",
    nameAr: "خالد سليم",
    role: "Public Figure",
    roleAr: "شخصية عامة",
    photo: "assets/khaled-selim-thumb.jpg",
    bio: "خالد سليم من الوجوه المتعاونة مع ماكولا إيجيبت ضمن خدمات الإنتاج الإعلامي والترند."
  }
];

// بيانات منظومة ماكولا (Macula Network)
const NETWORK = [
  {
    slug: "macula-creative",
    nameEng: "Macula Creative",
    nameAr: "الإبداع والدعاية",
    tagEng: "Creative & Advertising",
    icon: "🎨",
    bio: "الذراع الإبداعية لماكولا، مسؤولة عن تصميم الهوية البصرية وابتكار الحملات الإعلانية اللي بتخلي علامتك التجارية مميزة وسط المنافسة.",
    bioEn: "The creative arm of Macula, responsible for visual identities and advertising campaigns that make brands stand out.",
    bioEn: "Khaled Selim collaborates with Macula Egypt across media production and trend-focused digital services.",
    bioEn: "Mai Farouk collaborates with Macula Egypt on content strategy and social media management.",
    bioEn: "Maged El-Kedwany is one of Macula Egypt’s talents, with our team supporting aspects of his media production and digital presence.",
    bioEn: "Elham Wagdi collaborates with Macula Egypt across trend-focused services and social media management.",
    bioEn: "Lamiaa Fahmy is one of Macula Egypt’s talents, with our team supporting her digital presence and content management.",
    bioEn: "Bosy Shalaby collaborates with Macula Egypt on trend-focused strategies and strategic content.",
    bioEn: "Sohair Goda is one of Macula Egypt’s talents, with our team supporting media production and social media management.",
    bioEn: "Shimaa Elsebaey collaborates with Macula Egypt across trend-focused services and digital content management.",
    bioEn: "Malak Koura is one of Macula Egypt’s talents, supported through media production and strategic social media planning.",
    bioEn: "Rasha Mahdi collaborates with Macula Egypt on trend-focused content, media production, and digital content management.",
    bioEn: "Passant Shawky collaborates with Macula Egypt across trend-focused content, social media management, and strategic content planning.",
    bioEn: "Asma Kandeel is one of Macula Egypt’s talents. We work together on content management and a professional, integrated media and digital presence.",
    bioEn: "Heba El-Garhi achieved more than 100 million views across social platforms with Macula Egypt through an integrated content and digital marketing strategy.",
    bioEn: "Chef and content creator Vivian Farid works with us on digital content production and marketing, building a stronger audience presence across platforms.",
    bioEn: "Mariam Amin is a television and radio presenter. We manage her digital presence and create professional content that reflects her distinctive media personality.",
    bioEn: "Sabrien is one of the leading talents who joined the Macula Egypt family. We build an integrated content strategy across social platforms to maximize reach and engagement.",
    bioEn: "Hanan Motawie is one of the prominent talents collaborating with Macula Egypt. We manage her social media presence and content, achieving more than 61 million views across platforms.",
    services: ["Creative Direction", "Art Direction", "Graphic Design", "Copywriting", "Advertising Campaigns"]
  },
  {
    slug: "macula-digital",
    nameEng: "Macula Digital",
    nameAr: "التسويق الرقمي",
    tagEng: "Digital Marketing & Social Media",
    icon: "📈",
    bio: "بندير حضورك الرقمي بالكامل من إدارة السوشيال ميديا للحملات الممولة، ونحول كل جنيه تسويقي لنتيجة ملموسة بتقدر تقيسها بالأرقام.",
    bioEn: "We manage your digital presence from social media and paid campaigns to performance, turning marketing spend into measurable results.",
    services: ["Social Media Management", "Performance Marketing", "SEO", "Digital Campaigns", "Analytics & Reporting"]
  },
  {
    slug: "macula-studio",
    nameEng: "Macula Studio",
    nameAr: "الإنتاج المرئي",
    tagEng: "Video Production & Photography",
    icon: "🎥",
    bio: "استوديو إنتاج متكامل بيحول أفكارك لمحتوى مرئي احترافي، من التصوير والإخراج لحد المونتاج والموشن جرافيك.",
    bioEn: "A full-service production studio turning ideas into professional visual content, from shooting and directing to editing and motion graphics.",
    services: ["Commercial Production", "Photography", "Reels", "Podcast Production", "Green Screen Studio", "Post Production", "Motion Graphics"]
  },
  {
    slug: "macula-entertainment",
    nameEng: "Macula Entertainment",
    nameAr: "الفعاليات والترفيه",
    tagEng: "Events & Entertainment",
    icon: "🎪",
    bio: "بننظم وندير الفعاليات والحملات الترويجية بشكل احترافي، من التخطيط والتصميم لحد التنفيذ والتغطية الإعلامية.",
    bioEn: "We plan and manage events and promotional experiences from concept and design through execution and media coverage.",
    services: ["Event Production", "Stage Design", "Promotional Campaigns", "Live Coverage"]
  },
  {
    slug: "macula-tech",
    nameEng: "Macula Tech",
    nameAr: "المنتجات الرقمية",
    tagEng: "Websites & Digital Products",
    icon: "💻",
    bio: "بنبني المواقع والمنصات الرقمية اللي بتدعم نمو بيزنسك، بتصميم عصري وتجربة استخدام سلسة على أي جهاز.",
    bioEn: "We build modern websites and digital platforms that support business growth with seamless user experiences across devices.",
    services: ["Websites", "Landing Pages", "Digital Platforms", "Interactive Experiences"]
  },
  {
    slug: "macula-media",
    nameEng: "Macula Media",
    nameAr: "الإنتاج الإعلامي",
    tagEng: "Media Production & Publishing",
    icon: "📺",
    bio: "بنقدم محتوى إعلامي متنوع من برامج وحوارات ووثائقيات، وصولاً لمحتوى أصلي بعلامة Macula Originals.",
    bioEn: "We create media content including shows, interviews, documentaries, and original productions under the Macula Originals label.",
    services: ["Content Production", "Digital Shows", "Interviews", "Documentaries", "News & Trends"]
  }
];

// Social profiles for Macula talent/client detail pages.
// Only confirmed/public profile URLs are populated here; unknown links stay empty
// so the site never points visitors to an unrelated account.
const TALENT_SOCIALS = {
  "hanan-motawie": {
    facebook: "https://www.facebook.com/Official.Hanan.Motawie",
    instagram: "https://instagram.com/hananmotawie",
    tiktok: "",
    snapchat: ""
  },
  "sabrien": {
    facebook: "https://www.facebook.com/sabrien.yassien.9",
    instagram: "https://instagram.com/sabrienofficial",
    tiktok: "",
    snapchat: ""
  },
  "mariam-amin": {
    facebook: "https://www.facebook.com/mariamamin",
    instagram: "https://www.instagram.com/mariamamin",
    tiktok: "",
    snapchat: ""
  },
  "vivian-farid": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "heba-elgarhi": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "asma-kandeel": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "passant-shawky": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "rasha-mahdi": {
    facebook: "https://facebook.com/rashamahdii",
    instagram: "https://instagram.com/rashamahdi",
    tiktok: "",
    snapchat: "https://snapchat.com/add/rashamahdi"
  },
  "malak-koura": {
    facebook: "https://facebook.com/pg/Malakkourafans",
    instagram: "https://instagram.com/malak_koura",
    tiktok: "",
    snapchat: ""
  },
  "shimaa-elsebaey": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "sohair-goda": {
    facebook: "https://www.facebook.com/sohair.goda",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "bosy-shalaby": {
    facebook: "https://www.facebook.com/BosyShalabyOfficial",
    instagram: "https://www.instagram.com/boosy17",
    tiktok: "",
    snapchat: ""
  },
  "lamiaa-fahmy": {
    facebook: "https://www.facebook.com/LamiaaFahmyAbdelHamid",
    instagram: "https://www.instagram.com/lamiaafahmy",
    tiktok: "",
    snapchat: ""
  },
  "elham-wagdi": {
    facebook: "https://www.facebook.com/elhamwagdi",
    instagram: "https://www.instagram.com/elhamwagdi",
    tiktok: "https://www.tiktok.com/@elhamwagdii",
    snapchat: ""
  },
  "maged-elkedwany": {
    facebook: "https://www.facebook.com/magedelkedwany.officialpage",
    instagram: "https://www.instagram.com/magedelkedwany.official",
    tiktok: "",
    snapchat: ""
  },
  "mai-farouk": {
    facebook: "",
    instagram: "",
    tiktok: "",
    snapchat: ""
  },
  "khaled-selim": {
    facebook: "https://www.facebook.com/Khaled.Selim",
    instagram: "https://www.instagram.com/khaledselimofficial",
    tiktok: "",
    snapchat: ""
  }
};

// بيانات مشاريع قسم "أعمالنا" في الصفحة الرئيسية
// لإضافة صور/فيديوهات شغل حقيقي: حط الملفات في مجلد assets وأضفها في مصفوفة media بنفس شكل الأمثلة
const PROJECTS = [
  {
    slug: "integrated-social-media-campaign",
    tag: "Campaign",
    tagAr: "حملة",
    title: "Integrated Social Media Campaign",
    titleAr: "حملة سوشيال ميديا متكاملة",
    meta: "Social Media · 2025",
    metaAr: "السوشيال ميديا · 2025",
    thumb: "assets/hero.jpg",
    summary: "A full social media campaign covering strategy, content creation, and platform management — from the first idea to measurable results on every channel.",
    summaryAr: "حملة سوشيال ميديا متكاملة بتغطي الاستراتيجية وصناعة المحتوى وإدارة المنصات، من أول فكرة لحد نتائج حقيقية بنشوفها بالأرقام على كل منصة.",
    media: []
  },
  {
    slug: "talent-content-production",
    tag: "Production",
    tagAr: "إنتاج",
    title: "Content Production for One of Our Talents",
    titleAr: "إنتاج محتوى لأحد نجومنا",
    meta: "Video Production · 2025",
    metaAr: "إنتاج فيديو · 2025",
    thumb: "assets/hanan-motawie-full.jpg",
    summary: "End-to-end video production for one of our talents — scripting, filming, lighting, and post-production, all handled in-house by our own studios.",
    summaryAr: "إنتاج فيديو متكامل لأحد نجومنا — من كتابة السيناريو للتصوير والإضاءة والمونتاج، وكله بيتنفذ بأنفسنا في استوديوهاتنا.",
    media: []
  },
  {
    slug: "brand-identity-growing-brand",
    tag: "Branding",
    tagAr: "براندينج",
    title: "Brand Identity for a Growing Brand",
    titleAr: "هوية بصرية لعلامة تجارية نامية",
    meta: "Branding · 2024",
    metaAr: "براندينج · 2024",
    thumb: "assets/logo.png",
    summary: "A complete brand identity project — logo, visual language, and brand guidelines — built to give a growing brand a clear, consistent presence everywhere it shows up.",
    summaryAr: "مشروع هوية بصرية متكامل — لوجو، لغة بصرية، ودليل هوية — عشان نديله حضور واضح وثابت في كل مكان يظهر فيه.",
    media: []
  }
];

// عملاء وشركاء ماكولا إيجيبت (قسم "عملاؤنا وشركاؤنا")
// لإضافة شريك جديد: زوّد سطر في المصفوفة دي بس
const CLIENTS = [
  "رئاسة جمهورية مصر العربية",
  "راعي مصر",
  "مراتب ريتا",
  "كشري أبو طارق",
  "I Soft Systems",
  "CTV",
  "Mesat",
  "المركز الثقافي القبطي الأرثوذكسي",
  "المركز الثقافي القبطي الأرثوذكسي - ألمانيا",
  "Gabi Egypt",
  "وزارة الإنتاج الحربي",
  "حياة كريمة",
  "نايل كريستال",
  "دايموند بوت",
  "ديليس",
  "بيرجو",
  "مستشفى فريد حبيب",
  "بازوكا",
  "مركز الشيخ حامد الأحمدي الثقافي"
];
