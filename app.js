/**
 * Myanmar Computer - Master Application Script
 * Bilingual System (English & Myanmar Unicode) + Interactive Components
 */

// -----------------------------------------------------------------------------
// 1. Bilingual Translation Dictionaries
// -----------------------------------------------------------------------------
const translations = {
  en: {
    // Utility & Nav
    location_label: "No. 123, ICT Park Road, Hlaing Township, Yangon",
    brand_sub: "Technology for Tomorrow",
    nav_home: "Home",
    nav_pillars: "Offerings",
    nav_courses: "IT Academy",
    nav_solutions: "Web & Cloud",
    nav_infra: "Infrastructure",
    nav_directory: "Centres",
    nav_events: "Events",
    nav_contact: "Contact",
    nav_apply: "Enroll Now",

    // Hero
    hero_badge: "Empowering Myanmar's Digital Workforce",
    hero_title_lead: "Empowering Myanmar Through",
    hero_title_accent: "Technology & Education",
    hero_desc: "Myanmar Computer provides industry-standard IT training, professional web development, high-speed hosting, and enterprise IT infrastructure across Yangon, Mandalay, and nationwide.",
    hero_cta_courses: "Explore IT Courses",
    hero_cta_quote: "Get Web Solutions",
    stat_students: "15,000+",
    stat_students_lbl: "Certified Graduates",
    stat_partners: "500+",
    stat_partners_lbl: "Corporate Clients",
    stat_years: "25+ Years",
    stat_years_lbl: "Technology Leadership",
    hub_status: "Active Innovation Hub",
    feat_lab_title: "State-of-the-art Labs",
    feat_lab_desc: "High-spec workstations with fiber broadband",
    feat_cloud_title: "Enterprise Web Services",
    feat_cloud_desc: "Custom web development & 99.9% uptime hosting",
    feat_park_title: "MICT Park Strategic Hub",
    feat_park_desc: "Central partner in Yangon & Mandalay ICT zones",

    // Pillars
    pillars_sub: "Core Specializations",
    pillars_title: "Comprehensive Technology Solutions",
    pillars_desc: "Built to support digital infrastructure, IT education, and web technology throughout Myanmar.",
    pillar1_title: "IT Education & Training",
    pillar1_desc: "Hands-on, career-focused courses taught by certified instructors in state-of-the-art computer labs.",
    pillar1_b1: "Practical training from basic literacy to advanced coding",
    pillar1_b2: "Hands-on Cisco networking & server administration",
    pillar1_b3: "Tailored workforce upskilling for corporate teams",
    pillar2_title: "Web & Digital Solutions",
    pillar2_desc: "End-to-end digital experiences designed to help Myanmar enterprises and SMEs establish modern digital footprints.",
    pillar2_b1: "Custom responsive websites & web applications",
    pillar2_b2: "Reliable domain management & high-speed cloud hosting",
    pillar2_b3: "Monthly maintenance, security patches & SLA support",
    pillar3_title: "Technology Infrastructure",
    pillar3_desc: "Hardware sales, turnkey cyber café installations, and national ICT park collaborative initiatives.",
    pillar3_b1: "Turnkey cyber café workstation & networking setups",
    pillar3_b2: "Commercial hardware sales & IT maintenance contracts",
    pillar3_b3: "Strategic collaboration with Yangon & Mandalay ICT parks",

    // Courses Section
    courses_sub: "IT Academy Catalog",
    courses_title: "Industry-Ready Computer Training",
    courses_desc: "Choose from certified courses designed to prepare students for the modern technological landscape.",
    filter_all: "All Courses",
    filter_web: "Web Development",
    filter_networking: "Networking & Infra",
    filter_basic: "Basic & Office",
    filter_corporate: "Corporate Training",
    search_placeholder: "Search course by keyword...",
    course_duration_lbl: "Duration:",
    course_instructor_lbl: "Instructor:",
    course_price_lbl: "Tuition Fee:",
    btn_details: "Syllabus Details",
    btn_enroll: "Enroll Now",

    // Calculator Section
    calc_sub: "Instant Quote Estimator",
    calc_title: "Plan Your Web & Hosting Solution",
    calc_desc: "Select your project specifications below to calculate an upfront estimate for web development and hosting.",
    calc_step1: "1. Select Project Type",
    calc_opt_corp: "Corporate Website",
    calc_opt_corp_sub: "5-10 Pages, Responsive, CMS",
    calc_opt_ecom: "E-Commerce Store",
    calc_opt_ecom_sub: "Payment gateway, Product catalog",
    calc_opt_app: "Custom Web Application",
    calc_opt_app_sub: "Complex workflows, APIs, Portals",
    calc_opt_basic: "Starter Business Landing",
    calc_opt_basic_sub: "1-3 Pages, Lead Generation",
    calc_step2: "2. Select Hosting & Infrastructure Tier",
    calc_host_starter: "Cloud Starter (Shared)",
    calc_host_biz: "Business Pro (SSD + SSL)",
    calc_host_dedicated: "Enterprise Dedicated Server",
    calc_step3: "3. Optional Add-ons & Maintenance",
    calc_addon_domain: "Domain (.com / .com.mm Registration)",
    calc_addon_sla: "Annual Maintenance & Security SLA",
    calc_addon_seo: "Speed Optimization & Local SEO Pack",
    calc_est_title: "Estimated Investment",
    calc_est_sub: "Includes design, setup & initial configuration",
    calc_row_project: "Project Scope:",
    calc_row_hosting: "Cloud Hosting:",
    calc_row_addons: "Add-ons Selected:",
    btn_request_quote: "Request Official Proposal",

    // Infra & Parks
    infra_sub: "Infrastructure & Parks",
    infra_title: "Powering Myanmar's Digital Backbone",
    infra_desc: "From enterprise hardware fleets to nationwide ICT park partnerships, Myanmar Computer keeps your business connected.",
    infra_card1_title: "Hardware Sales & Fleet Supply",
    infra_card1_desc: "High-performance desktop workstations, rack servers, enterprise routers, and UPS systems with local manufacturer warranties.",
    infra_card2_title: "Cyber Café Setup & Solutions",
    infra_card2_desc: "Complete turnkey deployment: gigabit network cabling, workstation imaging, billing software, and bandwidth balancing.",
    infra_card3_title: "Enterprise IT Maintenance (AMC)",
    infra_card3_desc: "On-site and remote IT support contracts for corporate offices, schools, and computer laboratories with guaranteed SLAs.",
    park_title: "National ICT Park Collaborations",
    park_desc: "Myanmar Computer operates in direct collaboration with major technology parks, driving digital literacy and enterprise tech incubation.",
    park_loc1_title: "MICT Park Yangon (HQ Hub)",
    park_loc1_desc: "Main training labs & corporate solutions center in Hlaing Township",
    park_loc2_title: "Mandalay ICT Park Development",
    park_loc2_desc: "Regional support & tech training center for Upper Myanmar",

    // Directory
    dir_sub: "Nationwide Network",
    dir_title: "Affiliated Computer Centres & Branches",
    dir_desc: "Locate a verified Myanmar Computer training centre or branch in your division or township.",
    region_all: "All Regions",
    region_yangon: "Yangon",
    region_mandalay: "Mandalay",
    region_naypyidaw: "Naypyidaw",
    region_bago: "Bago",
    region_mawlamyine: "Mawlamyine",

    // Events
    events_sub: "Community & Exhibitions",
    events_title: "Upcoming ICT Exhibitions & Seminars",
    events_desc: "Join our hands-on workshops, career expos, and national technology showcases.",
    btn_event_register: "Register Seat",

    // Contact
    contact_sub: "Get In Touch",
    contact_title: "Start Your Technology Journey",
    contact_desc: "Have a question about courses, web development, or enterprise setups? Our tech advisory team is ready to assist.",
    contact_hq_title: "Yangon Headquarters",
    contact_addr_label: "Address",
    contact_addr_val: "No. 123, ICT Park Road, Hlaing Township, Yangon, Myanmar",
    contact_phone_label: "Direct Phone",
    contact_phone_val: "+95 (1) 652 123 / +95 9 512 3456",
    contact_email_label: "General & Course Inquiries",
    contact_email_val: "info@myanmarcomputer.com",
    contact_hours_label: "Operational Hours",
    contact_hours_val: "Mon - Sat: 8:30 AM - 5:30 PM (Sunday Closed)",
    form_name_lbl: "Your Full Name",
    form_phone_lbl: "Phone Number",
    form_email_lbl: "Email Address",
    form_topic_lbl: "Inquiry Category",
    form_topic_opt1: "IT Academy Course Enrollment",
    form_topic_opt2: "Web Design & Development Project",
    form_topic_opt3: "Domain & Web Hosting Package",
    form_topic_opt4: "Hardware & Cyber Café Setup",
    form_topic_opt5: "Affiliated Centre Partnership",
    form_msg_lbl: "Your Message or Requirements",
    btn_send_inquiry: "Submit Inquiry",

    // Footer
    footer_desc: "Myanmar Computer Co., Ltd. - Driving IT education, modern web technologies, and reliable digital infrastructure across the nation.",
    footer_quick_links: "Quick Navigation",
    footer_courses: "Academy Courses",
    footer_services: "Business Services",
    footer_copy: "© 2026 Myanmar Computer Co., Ltd. All rights reserved. Technology for Tomorrow."
  },

  my: {
    // Utility & Nav
    location_label: "အမှတ် (၁၂၃)၊ အိုင်စီတီ ပန်းခြံလမ်း၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့။",
    brand_sub: "မနက်ဖြန်အတွက် နည်းပညာ",
    nav_home: "ပင်မစာမျက်နှာ",
    nav_pillars: "ဝန်ဆောင်မှုများ",
    nav_courses: "အိုင်တီ သင်တန်းများ",
    nav_solutions: "ဝဘ်နှင့် ကလောက်ဒ်",
    nav_infra: "အခြေခံ အဆောက်အအုံ",
    nav_directory: "ကွန်ပျူတာ စင်တာများ",
    nav_events: "ပွဲများနှင့် ပြပွဲများ",
    nav_contact: "ဆက်သွယ်ရန်",
    nav_apply: "ယခုပဲ လျှောက်ထားပါ",

    // Hero
    hero_badge: "မြန်မာ့ ဒစ်ဂျစ်တယ် အနာဂတ် လူငယ်များကို စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း",
    hero_title_lead: "နည်းပညာဖြင့် မြန်မာပြည်ကို",
    hero_title_accent: "စွမ်းဆောင်ရည် မြှင့်တင်ခြင်း",
    hero_desc: "Myanmar Computer သည် ခေတ်မီ အိုင်တီ ကွန်ပျူတာ သင်တန်းများ၊ စိတ်ကြိုက် ဝဘ်ဆိုက် ရေးဆွဲမှု၊ စွမ်းဆောင်ရည်မြင့် Hosting နှင့် စီးပွားရေးလုပ်ငန်းသုံး အိုင်တီ အခြေခံ အဆောက်အအုံများကို ရန်ကုန်၊ မန္တလေးနှင့် တစ်နိုင်ငံလုံး အတိုင်းအတာဖြင့် ဝန်ဆောင်မှုပေးနေပါသည်။",
    hero_cta_courses: "သင်တန်းများ ကြည့်ရှုရန်",
    hero_cta_quote: "ဝဘ်ဆိုက် ဝန်ဆောင်မှု ရယူရန်",
    stat_students: "၁၅,၀၀၀+",
    stat_students_lbl: "အောင်မြင်ပြီးမြောက် ကျောင်းသားများ",
    stat_partners: "၅၀၀+",
    stat_partners_lbl: "ကုမ္ပဏီနှင့် လုပ်ငန်း သုံးစွဲသူများ",
    stat_years: "၂၅+ နှစ်",
    stat_years_lbl: "နည်းပညာ အတွေ့အကြုံ",
    hub_status: "ဖွံ့ဖြိုးတိုးတက်နေသော နည်းပညာဗဟိုချက်",
    feat_lab_title: "ခေတ်မီ လက်တွေ့စမ်းသပ်ခန်းများ",
    feat_lab_desc: "Fiber အင်တာနက်နှင့် စွမ်းဆောင်ရည်မြင့် ကွန်ပျူတာများ",
    feat_cloud_title: "လုပ်ငန်းသုံး ဝဘ်ဝန်ဆောင်မှုများ",
    feat_cloud_desc: "စိတ်ကြိုက် ဝဘ်ဆိုက် ရေးဆွဲခြင်းနှင့် 99.9% Uptime Hosting",
    feat_park_title: "MICT Park မဟာဗျူဟာမိတ်ဖက်",
    feat_park_desc: "ရန်ကုန်နှင့် မန္တလေး ICT Park များ၏ အဓိက လက်တွဲဖော်",

    // Pillars
    pillars_sub: "အဓိက အထူးပြု ဝန်ဆောင်မှုများ",
    pillars_title: "ပြည့်စုံသော နည်းပညာ ဝန်ဆောင်မှု ကဏ္ဍများ",
    pillars_desc: "မြန်မာနိုင်ငံ၏ ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံ၊ အိုင်တီ ပညာရေးနှင့် ဝဘ်နည်းပညာ ကဏ္ဍများကို ဘက်စုံ အထောက်အကူပြုနိုင်ရန် တည်ထောင်ထားပါသည်။",
    pillar1_title: "အိုင်တီ ပညာရေးနှင့် သင်တန်းများ",
    pillar1_desc: "အသိအမှတ်ပြု ဝါရင့် ဆရာများက ခေတ်မီ ကွန်ပျူတာ ဓာတ်ခွဲခန်းများတွင် လက်တွေ့ ဦးစားပေး စနစ်တကျ သင်ကြားပေးပါသည်။",
    pillar1_b1: "အခြေခံမှ စတင်၍ အဆင့်မြင့် Programming နှင့် Web Dev အထိ",
    pillar1_b2: "Cisco ကွန်ရက်ချိတ်ဆက်မှုနှင့် Server ထိန်းသိမ်းခြင်း လက်တွေ့လေ့ကျင့်မှု",
    pillar1_b3: "ကုမ္ပဏီဝန်ထမ်းများအတွက် စိတ်ကြိုက် Corporate Training များ",
    pillar2_title: "ဝဘ်ဆိုဒ်နှင့် ဒစ်ဂျစ်တယ် ဖြေရှင်းချက်များ",
    pillar2_desc: "မြန်မာ့စီးပွားရေးလုပ်ငန်းများ ခေတ်မီ ဒစ်ဂျစ်တယ်စနစ်သို့ ကူးပြောင်းနိုင်ရန် အရည်အသွေးမြင့် ဝဘ်နည်းပညာများ ထောက်ပံ့ပေးပါသည်။",
    pillar2_b1: "စိတ်ကြိုက် Modern Responsive ဝဘ်ဆိုက်နှင့် Web App ရေးဆွဲခြင်း",
    pillar2_b2: "ယုံကြည်စိတ်ချရသော ဒိုမိန်းနှင့် မြန်နှုန်းမြင့် Cloud Hosting ပက်ကေ့ဂျ်များ",
    pillar2_b3: "လစဉ် ထိန်းသိမ်းစောင့်ရှောက်မှု၊ လုံခြုံရေး အဆင့်မြှင့်တင်မှုနှင့် SLA ဝန်ဆောင်မှု",
    pillar3_title: "နည်းပညာ အခြေခံအဆောက်အအုံနှင့် ဝန်ဆောင်မှု",
    pillar3_desc: "ကွန်ပျူတာ ဟာ့ဒ်ဝဲ အရောင်း၊ ဆိုက်ဘာကဖေး (Cyber Café) စနစ်တကျ တပ်ဆင်မှုနှင့် အမျိုးသားအဆင့် ICT Park ပူးပေါင်းဆောင်ရွက်မှုများ။",
    pillar3_b1: "Cyber Café ဆိုင်များအတွက် ကွန်ရက်နှင့် ဆော့ဖ်ဝဲ အပြီးအစီး တပ်ဆင်ပေးခြင်း",
    pillar3_b2: "လုပ်ငန်းသုံး ဟာ့ဒ်ဝဲ အရောင်းနှင့် နှစ်စဉ် အိုင်တီ စောင့်ရှောက်မှု (AMC)",
    pillar3_b3: "ရန်ကုန် MICT Park နှင့် မန္တလေး ICT Park တို့နှင့် လက်တွဲပူးပေါင်းမှု",

    // Courses Section
    courses_sub: "သင်တန်း ကတ်တလောက်",
    courses_title: "ခေတ်မီ အိုင်တီ ကွန်ပျူတာ သင်တန်းများ",
    courses_desc: "မျက်မှောက်ခေတ် နည်းပညာ လုပ်ငန်းခွင်တွင် တိုက်ရိုက် အသုံးချနိုင်မည့် အသိအမှတ်ပြု သင်တန်းများကို ရွေးချယ်တက်ရောက်နိုင်ပါသည်။",
    filter_all: "သင်တန်း အားလုံး",
    filter_web: "Web Development",
    filter_networking: "Networking & Infra",
    filter_basic: "အခြေခံနှင့် ရုံးသုံး",
    filter_corporate: "Corporate Training",
    search_placeholder: "သင်တန်းအမည်ဖြင့် ရှာဖွေပါ...",
    course_duration_lbl: "သင်တန်းကာလ:",
    course_instructor_lbl: "နည်းပြဆရာ:",
    course_price_lbl: "သင်တန်းကြေး:",
    btn_details: "အသေးစိတ် အချက်အလက်",
    btn_enroll: "ယခုပဲ လျှောက်ထားပါ",

    // Calculator Section
    calc_sub: "အကြမ်းဖျင်း ကုန်ကျစရိတ် တွက်ချက်ခြင်း",
    calc_title: "ဝဘ်ဆိုက်နှင့် Hosting စရိတ် တွက်ချက်ကြည့်ပါ",
    calc_desc: "သင့်လုပ်ငန်း လိုအပ်ချက်နှင့် ကိုက်ညီသော ဝန်ဆောင်မှုများကို ရွေးချယ်ပြီး ခန့်မှန်းကုန်ကျစရိတ်ကို ချက်ချင်း လေ့လာနိုင်ပါသည်။",
    calc_step1: "၁။ ဝဘ်ဆိုက် ပုံစံ ရွေးချယ်ပါ",
    calc_opt_corp: "ကုမ္ပဏီ မိတ်ဆက် ဝဘ်ဆိုက်",
    calc_opt_corp_sub: "၅-၁၀ မျက်နှာ၊ Responsive၊ CMS ပါဝင်",
    calc_opt_ecom: "အွန်လိုင်း အရောင်းဆိုင် (E-Commerce)",
    calc_opt_ecom_sub: "ငွေပေးချေစနစ်၊ ကုန်ပစ္စည်း စာရင်းဇယား",
    calc_opt_app: "စိတ်ကြိုက် Web Application",
    calc_opt_app_sub: "ရှုပ်ထွေးသော လုပ်ငန်းဆောင်ရွက်မှုနှင့် Database",
    calc_opt_basic: "လုပ်ငန်းသုံး မိတ်ဆက် စာမျက်နှာ",
    calc_opt_basic_sub: "၁-၃ မျက်နှာ၊ ဖုန်းဆက်/စာပို့ရန် စနစ်",
    calc_step2: "၂။ Cloud Hosting အဆင့် ရွေးချယ်ပါ",
    calc_host_starter: "Cloud Starter (အခြေခံ သုံးစွဲသူများ)",
    calc_host_biz: "Business Pro (SSD + အခမဲ့ SSL)",
    calc_host_dedicated: "Enterprise Dedicated Server (သီးသန့်)",
    calc_step3: "၃။ ထပ်ဆောင်း ဝန်ဆောင်မှုများ",
    calc_addon_domain: "ဒိုမိန်း မှတ်ပုံတင်ခြင်း (.com / .com.mm)",
    calc_addon_sla: "၁ နှစ် စာချုပ်ဖြင့် စောင့်ရှောက်မှုနှင့် လုံခြုံရေး (SLA)",
    calc_addon_seo: "ဝဘ်ဆိုက် မြန်နှုန်းမြှင့်တင်ခြင်းနှင့် Google SEO",
    calc_est_title: "ခန့်မှန်း ကုန်ကျငွေ",
    calc_est_sub: "ဒီဇိုင်း၊ တည်ဆောက်မှုနှင့် ကနဦး တပ်ဆင်စရိတ် ပါဝင်ပြီး",
    calc_row_project: "ဝဘ်ဆိုက် ပုံစံ:",
    calc_row_hosting: "Cloud Hosting:",
    calc_row_addons: "ထပ်ဆောင်း ဝန်ဆောင်မှု:",
    btn_request_quote: "တရားဝင် Quotation တောင်းခံရန်",

    // Infra & Parks
    infra_sub: "အခြေခံအဆောက်အအုံနှင့် ပန်းခြံများ",
    infra_title: "မြန်မာ့ ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံ မောင်းနှင်သူ",
    infra_desc: "လုပ်ငန်းသုံး ကွန်ပျူတာ ပစ္စည်းများမှသည် ICT Park ပူးပေါင်းဆောင်ရွက်မှုများအထိ စဉ်ဆက်မပြတ် ဝန်ဆောင်မှုပေးနေပါသည်။",
    infra_card1_title: "ကွန်ပျူတာ ပစ္စည်းများနှင့် ဟာ့ဒ်ဝဲ အရောင်း",
    infra_card1_desc: "စွမ်းဆောင်ရည်မြင့် Desktop၊ Server များ၊ လုပ်ငန်းသုံး Router များနှင့် UPS များကို အာမခံချက် အပြည့်ဖြင့် ဖြန့်ဖြူးပေးခြင်း။",
    infra_card2_title: "Cyber Café အပြီးအစီး တပ်ဆင်ပေးခြင်း",
    infra_card2_desc: "ကွန်ရက်လိုင်းများ စနစ်တကျ ဆွဲပေးခြင်း၊ ကွန်ပျူတာ System များ တပ်ဆင်ခြင်း၊ စရိတ်တွက် ဆော့ဖ်ဝဲ ထည့်သွင်းပေးခြင်း။",
    infra_card3_title: "နှစ်စဉ် ကွန်ပျူတာ ထိန်းသိမ်းစောင့်ရှောက်မှု (AMC)",
    infra_card3_desc: "ရုံးများ၊ ကျောင်းများနှင့် ကွန်ပျူတာ ခန်းများအတွက် ပုံမှန် လာရောက်စစ်ဆေး ပြုပြင်ပေးသော စာချုပ်ဝန်ဆောင်မှု။",
    park_title: "အမျိုးသားအဆင့် ICT Park ပူးပေါင်း ဆောင်ရွက်မှုများ",
    park_desc: "Myanmar Computer သည် နိုင်ငံတကာအဆင့်မီ နည်းပညာ ဖွံ့ဖြိုးလာစေရန် ICT Park ကြီးများနှင့် လက်တွဲ ဆောင်ရွက်လျက်ရှိပါသည်။",
    park_loc1_title: "ရန်ကုန် MICT Park (ပင်မ ဗဟိုဌာန)",
    park_loc1_desc: "လှိုင်မြို့နယ်ရှိ ပင်မ ကွန်ပျူတာ သင်တန်းကျောင်းနှင့် အိုင်တီ ဝန်ဆောင်မှု စင်တာ",
    park_loc2_title: "မန္တလေး ICT Park တိုးချဲ့စီမံကိန်း",
    park_loc2_desc: "အထက်မြန်မာပြည်အတွက် နည်းပညာ သင်တန်းနှင့် ဒေသဆိုင်ရာ အထောက်အကူပြု စင်တာ",

    // Directory
    dir_sub: "တစ်နိုင်ငံလုံး ကွန်ရက်",
    dir_title: "လက်တွဲဖွင့်လှစ်ထားသော ကွန်ပျူတာ စင်တာများ",
    dir_desc: "မိမိတို့ တိုင်းဒေသကြီးနှင့် မြို့နယ်အလိုက် ဖွင့်လှစ်ထားသော Myanmar Computer သင်တန်းကျောင်းများကို ရှာဖွေနိုင်ပါသည်။",
    region_all: "ဒေသ အားလုံး",
    region_yangon: "ရန်ကုန်",
    region_mandalay: "မန္တလေး",
    region_naypyidaw: "နေပြည်တော်",
    region_bago: "ပဲခူး",
    region_mawlamyine: "မော်လမြိုင်",

    // Events
    events_sub: "အသိုက်အဝန်းနှင့် ပြပွဲများ",
    events_title: "လာမည့် အိုင်တီ ပြပွဲများနှင့် နည်းပညာ ဆွေးနွေးပွဲများ",
    events_desc: "လက်တွေ့ အလုပ်ရုံဆွေးနွေးပွဲများ၊ အလုပ်အကိုင် အခွင့်အလမ်း ပြပွဲများနှင့် ICT ဆွေးနွေးပွဲများတွင် ပါဝင်ဆင်နွှဲပါ။",
    btn_event_register: "နေရာ ဦးထားရန်",

    // Contact
    contact_sub: "ဆက်သွယ်ရန်",
    contact_title: "နည်းပညာ ခရီးစဉ်ကို ယခုပဲ စတင်လိုက်ပါ",
    contact_desc: "သင်တန်းများ၊ ဝဘ်ဆိုက် ရေးဆွဲခြင်း သို့မဟုတ် အိုင်တီ ဟာ့ဒ်ဝဲ လိုအပ်ချက်များအတွက် ကျွန်ုပ်တို့ ကျွမ်းကျင်အဖွဲ့နှင့် ဆွေးနွေးနိုင်ပါသည်။",
    contact_hq_title: "ရန်ကုန် ပင်မ ရုံးချုပ်",
    contact_addr_label: "လိပ်စာ",
    contact_addr_val: "အမှတ် (၁၂၃)၊ အိုင်စီတီ ပန်းခြံလမ်း၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့။",
    contact_phone_label: "တိုက်ရိုက် ဖုန်းနံပါတ်",
    contact_phone_val: "၀၁-၆၅၂၁၂၃ / ၀၉-၅၁၂၃၄၅၆",
    contact_email_label: "အီးမေးလ် စုံစမ်းရန်",
    contact_email_val: "info@myanmarcomputer.com",
    contact_hours_label: "ဖွင့်လှစ်ချိန်",
    contact_hours_val: "တနင်္လာ မှ စနေ: နံနက် ၈:၃၀ - ညနေ ၅:၃၀ (တနင်္ဂနွေ ပိတ်သည်)",
    form_name_lbl: "အမည် အပြည့်အစုံ",
    form_phone_lbl: "ဖုန်းနံပါတ်",
    form_email_lbl: "အီးမေးလ် လိပ်စာ",
    form_topic_lbl: "စုံစမ်းလိုသော အကြောင်းအရာ",
    form_topic_opt1: "အိုင်တီ ကွန်ပျူတာ သင်တန်း တက်ရောက်ရန်",
    form_topic_opt2: "ဝဘ်ဆိုက်နှင့် အက်ပ် ရေးဆွဲရန်",
    form_topic_opt3: "ဒိုမိန်းနှင့် Cloud Hosting ဝယ်ယူရန်",
    form_topic_opt4: "ဟာ့ဒ်ဝဲနှင့် Cyber Café တပ်ဆင်ရန်",
    form_topic_opt5: "ကွန်ပျူတာ စင်တာ မိတ်ဖက် လျှောက်ထားရန်",
    form_msg_lbl: "သိရှိလိုသည်များကို အသေးစိတ် ရေးသားပါ",
    btn_send_inquiry: "မက်ဆေ့ခ်ျ ပို့ရန်",

    // Footer
    footer_desc: "Myanmar Computer Co., Ltd. - မြန်မာနိုင်ငံတစ်ဝန်း အိုင်တီပညာရေး၊ ခေတ်မီ ဝဘ်နည်းပညာများနှင့် ခိုင်မာသော ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံများကို ဦးဆောင် ဖော်ဆောင်လျက်ရှိပါသည်။",
    footer_quick_links: "လျင်မြန်စွာ သွားရောက်ရန်",
    footer_courses: "သင်တန်းများ",
    footer_services: "လုပ်ငန်းသုံး ဝန်ဆောင်မှု",
    footer_copy: "© ၂၀၂၆ Myanmar Computer Co., Ltd. မူပိုင်ခွင့်များ ရယူထားပြီးဖြစ်သည်။ မနက်ဖြန်အတွက် နည်းပညာ။"
  }
};

// -----------------------------------------------------------------------------
// 2. Data Models (Courses, Centres, Events)
// -----------------------------------------------------------------------------
const coursesData = [
  {
    id: "web-dev-pro",
    category: "web",
    badgeEn: "Most Popular",
    badgeMy: "လူကြိုက်အများဆုံး",
    titleEn: "Professional Web Development Mastery",
    titleMy: "ပရော်ဖက်ရှင်နယ် ဝဘ်ဆိုက် ရေးဆွဲခြင်း အဆင့်မြင့်သင်တန်း",
    descEn: "Comprehensive hands-on training covering HTML5, CSS3, Modern JavaScript, React, Node.js, and relational database deployment.",
    descMy: "HTML5, CSS3, Modern JavaScript, React, Node.js နှင့် Database စနစ်များ ပါဝင်သော လက်တွေ့ ဦးစားပေး ဝဘ်ဒီဗလော့ပါ သင်တန်း။",
    durationEn: "12 Weeks (120 Hours)",
    durationMy: "၁၂ ပတ် (နာရီ ၁၂၀)",
    instructorEn: "U Kyaw Zin Lat (Senior Fullstack Lead)",
    instructorMy: "ဦးကျော်ဇင်လတ် (Senior Fullstack Lead)",
    priceEn: "350,000 MMK",
    priceMy: "၃၅၀,၀၀၀ ကျပ်",
    tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "MySQL"]
  },
  {
    id: "cisco-network-admin",
    category: "networking",
    badgeEn: "Certification Track",
    badgeMy: "အသိအမှတ်ပြု လက်မှတ်",
    titleEn: "Network Administration & Cisco Routing",
    titleMy: "ကွန်ရက် ချိတ်ဆက်မှုနှင့် Cisco စနစ် စီမံခန့်ခွဲမှု သင်တန်း",
    descEn: "In-depth network topology design, switch & router configuration, IP subnetting, firewall security, and practical lab maintenance.",
    descMy: "Switch နှင့် Router တပ်ဆင်ပုံ၊ IP Subnetting ခွဲခြားခြင်း၊ Firewall လုံခြုံရေးနှင့် ကွန်ရက် စောင့်ရှောက်မှု လက်တွေ့ စမ်းသပ်ခန်း လေ့ကျင့်မှု။",
    durationEn: "8 Weeks (80 Hours)",
    durationMy: "၈ ပတ် (နာရီ ၈၀)",
    instructorEn: "Daw Aye Myat Thu (CCNA / CCNP Certified)",
    instructorMy: "ဒေါ်အေးမြတ်သူ (CCNA / CCNP Certified)",
    priceEn: "280,000 MMK",
    priceMy: "၂၈၀,၀၀၀ ကျပ်",
    tags: ["Cisco", "TCP/IP", "Routing", "Switching", "Firewall"]
  },
  {
    id: "office-it-literacy",
    category: "basic",
    badgeEn: "Beginner Friendly",
    badgeMy: "အခြေခံမှ စတင်သူများအတွက်",
    titleEn: "Essential Computer Literacy & Office Productivity",
    titleMy: "အခြေခံ ကွန်ပျူတာ အသုံးချနှင့် ရုံးသုံး ဆော့ဖ်ဝဲ သင်တန်း",
    descEn: "From typing fluency and file organization to advanced Microsoft Word, Excel financial modeling, and cloud collaboration tools.",
    descMy: "လက်ကွက်မှစ၍ စာရိုက်ကျွမ်းကျင်မှု၊ Windows စနစ်၊ ရုံးသုံး Word, Excel တွက်ချက်မှုများနှင့် အွန်လိုင်း Cloud အသုံးချနည်းများ။",
    durationEn: "4 Weeks (40 Hours)",
    durationMy: "၄ ပတ် (နာရီ ၄၀)",
    instructorEn: "U Thant Zin (Head of Fundamentals)",
    instructorMy: "ဦးသန့်ဇင် (အခြေခံပညာဌာနမှူး)",
    priceEn: "120,000 MMK",
    priceMy: "၁၂၀,၀၀၀ ကျပ်",
    tags: ["Windows 11", "Word", "Excel", "PowerPoint", "Cloud Tools"]
  },
  {
    id: "corp-upskill",
    category: "corporate",
    badgeEn: "Customized",
    badgeMy: "လုပ်ငန်းသုံး သီးသန့်",
    titleEn: "Enterprise Digital Transformation & Security",
    titleMy: "ကုမ္ပဏီ ဝန်ထမ်းများအတွက် ဒစ်ဂျစ်တယ် လုံခြုံရေးနှင့် စွမ်းဆောင်ရည်မြှင့် သင်တန်း",
    descEn: "Tailored for corporate workforces: cybersecurity hygiene, collaborative project suites, automated reporting, and IT disaster recovery.",
    descMy: "ကုမ္ပဏီဝန်ထမ်းများအတွက် ရုံးတွင်း ဆိုက်ဘာလုံခြုံရေး၊ အလိုအလျောက် အစီရင်ခံစာ ထုတ်လုပ်ခြင်းနှင့် စနစ်တကျ အချက်အလက် ထိန်းသိမ်းခြင်း။",
    durationEn: "Flexible (On-site / Hybrid)",
    durationMy: "စိတ်ကြိုက်ရွေးချယ်နိုင် (ရုံးတွင်း/အွန်လိုင်း)",
    instructorEn: "Myanmar Computer Corporate Faculty",
    instructorMy: "Myanmar Computer လုပ်ငန်းသုံး အထူးနည်းပြအဖွဲ့",
    priceEn: "Custom Corporate Quote",
    priceMy: "ကုမ္ပဏီအလိုက် စိတ်ကြိုက်ညှိနှိုင်း",
    tags: ["Cybersecurity", "Excel Automation", "IT Support", "Cloud ERP"]
  },
  {
    id: "frontend-ui-ux",
    category: "web",
    badgeEn: "Design & Code",
    badgeMy: "ဒီဇိုင်းနှင့် ကုဒ်",
    titleEn: "UI/UX Design & Modern Responsive Interfaces",
    titleMy: "UI/UX ဒီဇိုင်းနှင့် ခေတ်မီ ဝဘ်မျက်နှာပြင် ရေးဆွဲနည်း",
    descEn: "Learn Figma wireframing, mobile-first design systems, Tailwind CSS styling, and accessible web standards for commercial apps.",
    descMy: "Figma ဖြင့် Prototype ရေးဆွဲခြင်း၊ Mobile-First ဒီဇိုင်းစနစ်၊ Tailwind CSS နှင့် သုံးစွဲသူ အဆင်ပြေစေမည့် Web Interface များ ဖန်တီးနည်း။",
    durationEn: "6 Weeks (60 Hours)",
    durationMy: "၆ ပတ် (နာရီ ၆၀)",
    instructorEn: "Daw May Thu Soe (Senior UI Specialist)",
    instructorMy: "ဒေါ်မေသူစိုး (Senior UI Specialist)",
    priceEn: "220,000 MMK",
    priceMy: "၂၂၀,၀၀၀ ကျပ်",
    tags: ["Figma", "Tailwind CSS", "UI/UX", "Responsive", "Accessibility"]
  },
  {
    id: "linux-server-infra",
    category: "networking",
    badgeEn: "System Engineering",
    badgeMy: "ဆာဗာ အင်ဂျင်နီယာ",
    titleEn: "Linux Server Administration & Cloud Infrastructure",
    titleMy: "Linux ဆာဗာ စီမံခန့်ခွဲမှုနှင့် Cloud နည်းပညာ သင်တန်း",
    descEn: "Master Ubuntu/Debian server setups, Apache/Nginx web server tuning, SSH keys, automated cron jobs, and DNS architecture.",
    descMy: "Ubuntu Server ထိန်းသိမ်းခြင်း၊ Nginx ဝဘ်ဆာဗာ တည်ဆောက်ခြင်း၊ SSH လုံခြုံရေး၊ Domain DNS ချိတ်ဆက်မှုနှင့် Backup စနစ်များ။",
    durationEn: "6 Weeks (60 Hours)",
    durationMy: "၆ ပတ် (နာရီ ၆၀)",
    instructorEn: "U Min Min Oo (DevOps Engineer)",
    instructorMy: "ဦးမင်းမင်းဦး (DevOps Engineer)",
    priceEn: "260,000 MMK",
    priceMy: "၂၆၀,၀၀၀ ကျပ်",
    tags: ["Linux", "Nginx", "DevOps", "DNS", "Cloud Server"]
  }
];

const centresData = [
  {
    id: "c-yangon-mict",
    region: "yangon",
    badgeEn: "Headquarters Hub",
    badgeMy: "ပင်မ ရုံးချုပ်",
    nameEn: "MICT Park Main Campus",
    nameMy: "MICT Park ပင်မ ကျောင်းခွဲ",
    addressEn: "Building (4), ICT Park Road, Hlaing Township, Yangon",
    addressMy: "အမှတ် (၄)၊ အိုင်စီတီ ပန်းခြံလမ်း၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့။",
    phone: "01-652123 / 09-5123456",
    facilitiesEn: ["4 Air-Con Labs", "Fiber 100Mbps", "Testing Centre", "Hardware Showroom"],
    facilitiesMy: ["လေအေးပေးစက်ပါ ခန်းမ ၄ ခု", "Fiber ၁၀၀ Mbps", "စာမေးပွဲ စင်တာ", "ပစ္စည်း အရောင်းပြခန်း"]
  },
  {
    id: "c-yangon-downtown",
    region: "yangon",
    badgeEn: "Downtown Branch",
    badgeMy: "မြို့လယ် ကျောင်းခွဲ",
    nameEn: "Yangon Central City Centre",
    nameMy: "ရန်ကုန် မြို့လယ် ကွန်ပျူတာ စင်တာ",
    addressEn: "Anawrahta Road, Kyauktada Township, Yangon",
    addressMy: "အနော်ရထာလမ်း၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို့။",
    phone: "01-254980 / 09-7890123",
    facilitiesEn: ["2 Practical Labs", "High-speed Internet", "Weekend Batches"],
    facilitiesMy: ["လက်တွေ့ခန်း ၂ ခု", "မြန်နှုန်းမြင့် အင်တာနက်", "စနေ/တနင်္ဂနွေ သင်တန်း"]
  },
  {
    id: "c-mandalay-ict",
    region: "mandalay",
    badgeEn: "Regional Hub",
    badgeMy: "အထက်မြန်မာပြည် ဗဟို",
    nameEn: "Mandalay ICT Park Centre",
    nameMy: "မန္တလေး ICT Park ကွန်ပျူတာ စင်တာ",
    addressEn: "Mandalay ICT Park, Chanayethazan Township, Mandalay",
    addressMy: "မန္တလေး အိုင်စီတီ ပန်းခြံ၊ ချမ်းအေးသာစံမြို့နယ်၊ မန္တလေးမြို့။",
    phone: "02-892110 / 09-4567890",
    facilitiesEn: ["3 Advanced Labs", "Dedicated Server Room", "Corporate Hall"],
    facilitiesMy: ["အဆင့်မြင့် လက်တွေ့ခန်း ၃ ခု", "Server သီးသန့်ခန်း", "လုပ်ငန်းသုံး ခန်းမ"]
  },
  {
    id: "c-naypyidaw",
    region: "naypyidaw",
    badgeEn: "Capital Branch",
    badgeMy: "နေပြည်တော် ကျောင်းခွဲ",
    nameEn: "Naypyidaw Training Hub",
    nameMy: "နေပြည်တော် နည်းပညာ လေ့ကျင့်ရေး စင်တာ",
    addressEn: "Zabuthiri Commercial Zone, Naypyidaw",
    addressMy: "ဇမ္ဗူသီရိ ကုန်သွယ်မှုဇုန်၊ နေပြည်တော်။",
    phone: "067-412890",
    facilitiesEn: ["2 Multimedia Classrooms", "Government & Corporate Training"],
    facilitiesMy: ["မာတီမီဒီယာ စာသင်ခန်း ၂ ခု", "ဌာနဆိုင်ရာ/လုပ်ငန်းသုံး သင်တန်းများ"]
  },
  {
    id: "c-bago",
    region: "bago",
    badgeEn: "Affiliated Centre",
    badgeMy: "လက်တွဲ စင်တာ",
    nameEn: "Bago ICT Learning Centre",
    nameMy: "ပဲခူး အိုင်စီတီ သင်ကြားရေး စင်တာ",
    addressEn: "Main Road, Shin Saw Pu Ward, Bago",
    addressMy: "ပင်မလမ်းမကြီး၊ ရှင်စောပု ရပ်ကွက်၊ ပဲခူးမြို့။",
    phone: "052-22450",
    facilitiesEn: ["Computer Literacy Lab", "Hardware Support Desk"],
    facilitiesMy: ["အခြေခံ ကွန်ပျူတာ ခန်းမ", "ဟာ့ဒ်ဝဲ ပြုပြင်ရေး ကောင်တာ"]
  },
  {
    id: "c-mawlamyine",
    region: "mawlamyine",
    badgeEn: "Affiliated Centre",
    badgeMy: "လက်တွဲ စင်တာ",
    nameEn: "Mawlamyine Technology Hub",
    nameMy: "မော်လမြိုင် နည်းပညာ စင်တာ",
    addressEn: "Lower Main Road, Mawlamyine, Mon State",
    addressMy: "အောက်လမ်းမကြီး၊ မော်လမြိုင်မြို့၊ မွန်ပြည်နယ်။",
    phone: "057-20340",
    facilitiesEn: ["Modern Lab", "Fiber Connection", "Student Study Lounge"],
    facilitiesMy: ["ခေတ်မီ လက်တွေ့ခန်း", "Fiber လိုင်း", "ကျောင်းသား စာကြည့်ခန်း"]
  }
];

const eventsData = [
  {
    id: "ev-fair-2026",
    day: "15",
    monthEn: "Nov",
    monthMy: "နိုဝင်ဘာ",
    titleEn: "Myanmar National ICT Fair & Expo 2026",
    titleMy: "မြန်မာ အမျိုးသားအဆင့် ICT ပြပွဲနှင့် ကွန်ဖရင့် ၂၀၂၆",
    descEn: "Showcasing cutting-edge web technologies, artificial intelligence in business, student coding projects, and hiring booths.",
    descMy: "ခေတ်မီ ဝဘ်နည်းပညာများ၊ စီးပွားရေးတွင် AI အသုံးချမှု၊ ကျောင်းသားများ၏ ဖန်တီးမှုများနှင့် အလုပ်အကိုင် အခွင့်အလမ်း ပြခန်းများ။",
    venueEn: "Grand Ballroom, MICT Park, Hlaing, Yangon",
    venueMy: "မဟာခန်းမ၊ MICT Park၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့။",
    seatsEn: "Free Entry (500 Seats)",
    seatsMy: "အခမဲ့ တက်ရောက်နိုင် (လူဦးရေ ၅၀၀)"
  },
  {
    id: "ev-hackathon-2026",
    day: "28",
    monthEn: "Nov",
    monthMy: "နိုဝင်ဘာ",
    titleEn: "Youth Tech Code Sprint & Hackathon",
    titleMy: "လူငယ် နည်းပညာ ရေးဆွဲယှဉ်ပြိုင်ပွဲ (Hackathon)",
    descEn: "48-hour continuous coding sprint where aspiring software teams build solutions for local communities with cash prizes and internships.",
    descMy: "ဒေသတွင်း လူမှုအကျိုးပြု ဆော့ဖ်ဝဲများ ရေးသားယှဉ်ပြိုင်မည့် ၄၈ နာရီ စိန်ခေါ်ပွဲ။ ဆုကြေးငွေနှင့် အလုပ်သင် အခွင့်အလမ်းများ ပါဝင်မည်။",
    venueEn: "Innovation Lab (3), MICT Park, Yangon",
    venueMy: "တီထွင်မှု ဓာတ်ခွဲခန်း (၃)၊ MICT Park၊ ရန်ကုန်မြို့။",
    seatsEn: "30 Teams Max",
    seatsMy: "အဖွဲ့ ၃၀ သာ ကန့်သတ်ထားသည်"
  },
  {
    id: "ev-cyber-biz",
    day: "12",
    monthEn: "Dec",
    monthMy: "ဒီဇင်ဘာ",
    titleEn: "Cyber Security & Cloud Infrastructure Summit",
    titleMy: "စီးပွားရေးလုပ်ငန်းသုံး ဆိုက်ဘာလုံခြုံရေးနှင့် Cloud ဆွေးနွေးပွဲ",
    descEn: "Exclusive executive seminar for business owners, CTOs, and IT managers on safeguarding corporate data and reducing downtime.",
    descMy: "စီးပွားရေးလုပ်ငန်းရှင်များနှင့် အိုင်တီမန်နေဂျာများအတွက် အချက်အလက် လုံခြုံရေးနှင့် ဆာဗာ ပြတ်တောက်မှု မရှိစေရန် ဆွေးနွေးပွဲ။",
    venueEn: "Mandalay ICT Park Conference Hall",
    venueMy: "မန္တလေး ICT Park ညီလာခံ ခန်းမကြီး",
    seatsEn: "Registration Required (120 Seats)",
    seatsMy: "စာရင်းပေးသွင်းရန် လိုအပ်သည် (၁၂၀ ဦး)"
  }
];

// -----------------------------------------------------------------------------
// 3. Application State & Interactive Logic
// -----------------------------------------------------------------------------
let currentLang = localStorage.getItem("mc_lang") || "en";
let selectedCategory = "all";
let courseSearchQuery = "";
let selectedRegion = "all";

// Calculator Initial State
let calcState = {
  projectCost: 650000,
  projectNameEn: "Corporate Website (5-10 Pages)",
  projectNameMy: "ကုမ္ပဏီ မိတ်ဆက် ဝဘ်ဆိုက် (၅-၁၀ မျက်နှာ)",
  hostingCost: 150000,
  hostingNameEn: "Business Pro (SSD + SSL)",
  hostingNameMy: "Business Pro (SSD + အခမဲ့ SSL)",
  addons: {
    domain: { checked: true, cost: 70000, nameEn: "Domain Registration", nameMy: "ဒိုမိန်း မှတ်ပုံတင်ခြင်း" },
    sla: { checked: true, cost: 180000, nameEn: "Annual Maintenance SLA", nameMy: "၁ နှစ် ထိန်းသိမ်းမှု SLA" },
    seo: { checked: false, cost: 90000, nameEn: "SEO & Speed Optimization", nameMy: "SEO နှင့် မြန်နှုန်းမြှင့်တင်ခြင်း" }
  }
};

// -----------------------------------------------------------------------------
// 4. DOM Initialization
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderCourses();
  renderCentres();
  renderEvents();
  initCalculator();
  initEventListeners();
});

// -----------------------------------------------------------------------------
// 5. Language Handling & Localization
// -----------------------------------------------------------------------------
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mc_lang", lang);
  applyLanguageUI();
}

function initLanguage() {
  applyLanguageUI();
}

function applyLanguageUI() {
  document.documentElement.lang = currentLang === "my" ? "my" : "en";
  if (currentLang === "my") {
    document.body.classList.add("lang-my");
  } else {
    document.body.classList.remove("lang-my");
  }

  // Update switcher buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update all data-i18n elements
  const t = translations[currentLang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById("courseSearchInput");
  if (searchInput) {
    searchInput.placeholder = t.search_placeholder || "Search course by keyword...";
  }

  // Re-render dynamic lists with new language
  renderCourses();
  renderCentres();
  renderEvents();
  updateCalculatorUI();
}

// -----------------------------------------------------------------------------
// 6. Dynamic Courses Engine
// -----------------------------------------------------------------------------
function renderCourses() {
  const container = document.getElementById("coursesGrid");
  if (!container) return;

  const t = translations[currentLang];
  const query = courseSearchQuery.toLowerCase().trim();

  const filtered = coursesData.filter(course => {
    const matchesCat = (selectedCategory === "all") || (course.category === selectedCategory);
    const titleMatch = (course.titleEn.toLowerCase().includes(query)) || (course.titleMy.toLowerCase().includes(query));
    const descMatch = (course.descEn.toLowerCase().includes(query)) || (course.descMy.toLowerCase().includes(query));
    const tagMatch = course.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesCat && (titleMatch || descMatch || tagMatch);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: white; border-radius: 16px; border: 1px dashed var(--color-slate-300);">
        <p style="color: var(--color-slate-500); font-size: 1.1rem;">
          ${currentLang === "my" ? "ကိုက်ညီသော သင်တန်း မတွေ့ရှိပါ။ အခြား စကားလုံးဖြင့် ရှာဖွေကြည့်ပါ။" : "No courses found matching your criteria. Try adjusting your search."}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => {
    const title = currentLang === "my" ? course.titleMy : course.titleEn;
    const desc = currentLang === "my" ? course.descMy : course.descEn;
    const duration = currentLang === "my" ? course.durationMy : course.durationEn;
    const instructor = currentLang === "my" ? course.instructorMy : course.instructorEn;
    const price = currentLang === "my" ? course.priceMy : course.priceEn;
    const badge = currentLang === "my" ? course.badgeMy : course.badgeEn;

    return `
      <article class="course-card">
        <div class="course-card-header">
          <span class="course-category-tag">${course.category.toUpperCase()}</span>
          <span class="badge badge-amber">${badge}</span>
        </div>
        <div class="course-card-body">
          <h3 class="course-card-title">${title}</h3>
          <p class="course-card-desc">${desc}</p>
          <div class="course-meta-list">
            <div class="course-meta-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span><strong>${t.course_duration_lbl}</strong> ${duration}</span>
            </div>
            <div class="course-meta-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span><strong>${t.course_instructor_lbl}</strong> ${instructor}</span>
            </div>
          </div>
          <div class="course-tags">
            ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="course-card-footer">
          <div class="course-price-wrap">
            <span class="course-price-label">${t.course_price_lbl}</span>
            <span class="course-price-val">${price}</span>
          </div>
          <button class="btn btn-sm btn-primary" onclick="openEnrollModal('${course.id}')">
            ${t.btn_enroll}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 7. Dynamic Centres Directory
// -----------------------------------------------------------------------------
function renderCentres() {
  const container = document.getElementById("directoryGrid");
  if (!container) return;

  const filtered = centresData.filter(centre => {
    return (selectedRegion === "all") || (centre.region === selectedRegion);
  });

  container.innerHTML = filtered.map(c => {
    const name = currentLang === "my" ? c.nameMy : c.nameEn;
    const address = currentLang === "my" ? c.addressMy : c.addressEn;
    const badge = currentLang === "my" ? c.badgeMy : c.badgeEn;
    const facilities = currentLang === "my" ? c.facilitiesMy : c.facilitiesEn;

    return `
      <div class="centre-card">
        <div class="centre-badge-wrap">
          <span class="badge badge-blue">${badge}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-slate-400); text-transform: uppercase;">${c.region}</span>
        </div>
        <h4>${name}</h4>
        <div class="centre-address">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${address}</span>
        </div>
        <div class="centre-facilities">
          ${facilities.map(f => `<span class="facility-tag">${f}</span>`).join("")}
        </div>
        <div class="centre-card-footer">
          <span>📞 ${c.phone}</span>
          <a class="btn btn-sm btn-outline" href="tel:${c.phone.split('/')[0].trim()}">
            ${currentLang === "my" ? "ဖုန်းခေါ်ဆိုရန်" : "Call Centre"}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 8. Dynamic Events Engine
// -----------------------------------------------------------------------------
function renderEvents() {
  const container = document.getElementById("eventsGrid");
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = eventsData.map(ev => {
    const title = currentLang === "my" ? ev.titleMy : ev.titleEn;
    const desc = currentLang === "my" ? ev.descMy : ev.descEn;
    const month = currentLang === "my" ? ev.monthMy : ev.monthEn;
    const venue = currentLang === "my" ? ev.venueMy : ev.venueEn;
    const seats = currentLang === "my" ? ev.seatsMy : ev.seatsEn;

    return `
      <div class="event-card">
        <div class="event-date-strip">
          <div>
            <span class="event-date-day">${ev.day}</span>
            <span class="event-date-month">${month} 2026</span>
          </div>
          <span class="badge badge-amber" style="font-size: 0.725rem;">${seats}</span>
        </div>
        <div class="event-body">
          <h4>${title}</h4>
          <p>${desc}</p>
          <div class="event-venue-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${venue}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openEventModal('${ev.id}')">
            ${t.btn_event_register}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 9. Interactive Web & Cloud Cost Estimator
// -----------------------------------------------------------------------------
function initCalculator() {
  // Project Radio Options
  document.querySelectorAll(".calc-radio-card[data-project-cost]").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".calc-radio-card[data-project-cost]").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      calcState.projectCost = parseInt(card.dataset.projectCost, 10);
      calcState.projectNameEn = card.dataset.titleEn;
      calcState.projectNameMy = card.dataset.titleMy;
      updateCalculatorUI();
    });
  });

  // Hosting Radio Options
  document.querySelectorAll(".calc-radio-card[data-hosting-cost]").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".calc-radio-card[data-hosting-cost]").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      calcState.hostingCost = parseInt(card.dataset.hostingCost, 10);
      calcState.hostingNameEn = card.dataset.titleEn;
      calcState.hostingNameMy = card.dataset.titleMy;
      updateCalculatorUI();
    });
  });

  // Add-on Checkboxes
  document.querySelectorAll(".calc-checkbox-card").forEach(card => {
    const input = card.querySelector("input[type='checkbox']");
    card.addEventListener("click", (e) => {
      if (e.target !== input) {
        input.checked = !input.checked;
      }
      const key = card.dataset.addonKey;
      if (calcState.addons[key]) {
        calcState.addons[key].checked = input.checked;
        if (input.checked) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      }
      updateCalculatorUI();
    });
  });

  updateCalculatorUI();
}

function updateCalculatorUI() {
  let totalAddons = 0;
  let activeAddonNames = [];

  for (const key in calcState.addons) {
    if (calcState.addons[key].checked) {
      totalAddons += calcState.addons[key].cost;
      activeAddonNames.push(currentLang === "my" ? calcState.addons[key].nameMy : calcState.addons[key].nameEn);
    }
  }

  const grandTotal = calcState.projectCost + calcState.hostingCost + totalAddons;
  const grandTotalUSD = Math.round(grandTotal / 3500); // Approximate exchange for reference

  const totalEl = document.getElementById("calcGrandTotal");
  const subEl = document.getElementById("calcUsdSub");
  const rowProject = document.getElementById("calcSummaryProject");
  const rowHosting = document.getElementById("calcSummaryHosting");
  const rowAddons = document.getElementById("calcSummaryAddons");

  if (totalEl) {
    totalEl.textContent = `${grandTotal.toLocaleString()} MMK`;
  }
  if (subEl) {
    subEl.textContent = `Approx. ~$${grandTotalUSD} USD (Flexible Milestone Payments)`;
  }
  if (rowProject) {
    rowProject.textContent = currentLang === "my" ? calcState.projectNameMy : calcState.projectNameEn;
  }
  if (rowHosting) {
    rowHosting.textContent = currentLang === "my" ? calcState.hostingNameMy : calcState.hostingNameEn;
  }
  if (rowAddons) {
    rowAddons.textContent = activeAddonNames.length > 0 ? activeAddonNames.join(", ") : (currentLang === "my" ? "မရှိပါ" : "None");
  }
}

// -----------------------------------------------------------------------------
// 10. Modals Management (Enroll, Event, Quote)
// -----------------------------------------------------------------------------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function openEnrollModal(courseId) {
  const select = document.getElementById("enrollCourseSelect");
  if (select) {
    select.innerHTML = coursesData.map(c => {
      const title = currentLang === "my" ? c.titleMy : c.titleEn;
      const isSelected = c.id === courseId ? "selected" : "";
      return `<option value="${c.id}" ${isSelected}>${title}</option>`;
    }).join("");
  }
  openModal("enrollModal");
}

function openEventModal(eventId) {
  const ev = eventsData.find(e => e.id === eventId);
  if (ev) {
    const title = currentLang === "my" ? ev.titleMy : ev.titleEn;
    const titleEl = document.getElementById("eventModalTitle");
    const idInput = document.getElementById("eventModalIdInput");
    if (titleEl) titleEl.textContent = title;
    if (idInput) idInput.value = ev.id;
  }
  openModal("eventModal");
}

function openQuoteProposalModal() {
  const summaryBox = document.getElementById("quoteModalSummary");
  if (summaryBox) {
    const proj = currentLang === "my" ? calcState.projectNameMy : calcState.projectNameEn;
    const host = currentLang === "my" ? calcState.hostingNameMy : calcState.hostingNameEn;
    const total = document.getElementById("calcGrandTotal") ? document.getElementById("calcGrandTotal").textContent : "";

    summaryBox.innerHTML = `
      <div style="background: var(--color-slate-100); padding: 14px; border-radius: 8px; margin-bottom: 16px; font-size: 0.9rem;">
        <div><strong>Selected Solution:</strong> ${proj}</div>
        <div><strong>Hosting:</strong> ${host}</div>
        <div><strong>Estimated Total:</strong> <span style="color: var(--color-accent-cyan); font-weight: 800;">${total}</span></div>
      </div>
    `;
  }
  openModal("quoteModal");
}

// -----------------------------------------------------------------------------
// 11. Toast Notifications
// -----------------------------------------------------------------------------
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-success-green); flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// -----------------------------------------------------------------------------
// 12. Event Listeners & Form Submissions
// -----------------------------------------------------------------------------
function initEventListeners() {
  // Language button clicks
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    // Close nav on click of link
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  // Course Filter Pills
  document.querySelectorAll(".filter-btn[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-category]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.dataset.category;
      renderCourses();
    });
  });

  // Course Search Input
  const searchInput = document.getElementById("courseSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      courseSearchQuery = e.target.value;
      renderCourses();
    });
  }

  // Directory Region Pills
  document.querySelectorAll(".region-btn[data-region]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".region-btn[data-region]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedRegion = btn.dataset.region;
      renderCentres();
    });
  });

  // Modal Close buttons
  document.querySelectorAll(".modal-close-btn, .btn-modal-close").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-backdrop");
      if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  // Close modal on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach(modal => {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  });

  // Form: Enrollment Form
  const enrollForm = document.getElementById("enrollForm");
  if (enrollForm) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("enrollModal");
      showToast(currentLang === "my" ? "လျှောက်လွှာကို အောင်မြင်စွာ လက်ခံရရှိပါသည်။ မကြာမီ ကျွန်ုပ်တို့ အဖွဲ့မှ ဆက်သွယ်ပါမည်။" : "Enrollment received! Our admissions team will contact you shortly.");
      enrollForm.reset();
    });
  }

  // Form: Event Registration
  const eventForm = document.getElementById("eventForm");
  if (eventForm) {
    eventForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("eventModal");
      showToast(currentLang === "my" ? "ပွဲတက်ရောက်ခွင့် လက်မှတ်ကို အတည်ပြုပြီးပါပြီ။" : "Seat reserved successfully! Confirmation sent to your contact.");
      eventForm.reset();
    });
  }

  // Form: Quote Proposal Request
  const quoteForm = document.getElementById("quoteProposalForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("quoteModal");
      showToast(currentLang === "my" ? "တရားဝင် Quotation တောင်းခံမှုကို ရရှိပါသည်။ အသေးစိတ် စာရွက်စာတမ်းကို ပေးပို့ပေးပါမည်။" : "Proposal request sent! Our technical consultants will send the full RFP package.");
      quoteForm.reset();
    });
  }
}
