// Toàn bộ nội dung của trang nằm ở đây — sửa chữ, ảnh, link tại file này.

export const brand = {
  creatorName: 'Phạm Nguyễn Yến Hà',
  wordmark: 'YẾN HÀ.',
  pageTitle: 'Yến Hà Tới Đây',
  contactLink: 'https://github.com/Hanny2005',
  contactLabel: 'github.com/Hanny2005',
}

export type ContactChannel = { label: string; value: string; href: string }

export const contactChannels: ContactChannel[] = [
  { label: 'Facebook', value: 'Phạm Nguyễn Yến Hà', href: 'https://www.facebook.com/share/1EPipBza5U/' },
  { label: 'Zalo', value: '0338 808 724', href: 'https://zalo.me/0338808724' },
  { label: 'GitHub', value: 'Hanny2005', href: 'https://github.com/Hanny2005' },
]

export type NavLink = { label: string; target: string }

export const navLinks: NavLink[] = [
  { label: 'Giới thiệu', target: '#about' },
  { label: 'Kỹ năng', target: '#services' },
  { label: 'Dự án', target: '#projects' },
  { label: 'Liên hệ', target: '#contact' },
]

export const hero = {
  kicker: 'Welcome to my . . .',
  heading: 'Portfolio',
  supportingCopy:
    'Sinh viên năm 3 Lập trình Web tại Cao đẳng Kỹ thuật Cao Thắng. Mình thiết kế giao diện và xây website gọn, đẹp, dễ dùng.',
  portrait: 'images/portrait-hero.png',
  portraitAlt: 'Yến Hà mặc sơ mi trắng, đeo kính, ôm tập tài liệu',
  ctaLabel: 'Liên hệ với mình',
  ctaTarget: '#contact',
}

export type GalleryImage = { src: string; alt: string }

export const marqueeImages: GalleryImage[] = [
  { src: 'images/photo-01.jpg', alt: 'Yến Hà ôm tập tài liệu' },
  { src: 'images/lumi-trang-chu.jpg', alt: 'Trang chủ website mỹ phẩm LUMI Beauty' },
  { src: 'images/study-light.jpg', alt: 'Giao diện sáng của Study With Me' },
  { src: 'images/photo-02.jpg', alt: 'Yến Hà chống cằm' },
  { src: 'images/library-home.jpg', alt: 'Trang giới thiệu Thư viện Tri Thức' },
  { src: 'images/lumi-flash-sale.jpg', alt: 'Khu Flash Sale của LUMI Beauty' },
  { src: 'images/photo-03.jpg', alt: 'Yến Hà giơ tay chữ V' },
  { src: 'images/cine-biet-doi-bao-lua.svg', alt: 'Poster phim mẫu trong CineBox' },
  { src: 'images/lumi-chi-tiet-san-pham.jpg', alt: 'Trang chi tiết sản phẩm LUMI Beauty' },
  { src: 'images/polaroid.jpg', alt: 'Ảnh polaroid Yến Hà chỉnh kính' },
  { src: 'images/study-dark.jpg', alt: 'Giao diện tối của Study With Me' },
  // hàng 2
  { src: 'images/photo-04.jpg', alt: 'Yến Hà chỉnh gọng kính' },
  { src: 'images/library-catalog.jpg', alt: 'Danh mục sách của Thư viện Tri Thức' },
  { src: 'images/lumi-danh-gia.jpg', alt: 'Khu đánh giá sao của LUMI Beauty' },
  { src: 'images/photo-05.jpg', alt: 'Yến Hà khoanh tay' },
  { src: 'images/study-focus.jpg', alt: 'Bảng điểm và GPA trong Study With Me' },
  { src: 'images/cine-mua-he-o-da-lat.svg', alt: 'Poster phim mẫu Mùa hè ở Đà Lạt trong CineBox' },
  { src: 'images/lumi-tai-khoan.jpg', alt: 'Trang tài khoản khách hàng LUMI Beauty' },
  { src: 'images/photo-06.jpg', alt: 'Yến Hà nhìn nghiêng, tay vén tóc' },
  { src: 'images/library-dashboard.jpg', alt: 'Admin dashboard của Thư viện Tri Thức' },
  { src: 'images/lumi-san-pham.jpg', alt: 'Danh mục sản phẩm LUMI Beauty' },
]

export const about = {
  heading: 'Xin chào, mình là Yến Hà',
  description:
    'Mình là Yến Hà, sinh ngày 09/01/2005, cô gái miền Tây quê ở Đồng Tháp, hiện là sinh viên năm 3 ngành Công nghệ Thông tin, chuyên ngành Lập trình Web tại Trường Cao đẳng Kỹ thuật Cao Thắng. Mình mê thiết kế giao diện và phát triển website, luôn muốn học hỏi, trau dồi kỹ năng và đưa kiến thức vào những dự án thật. Mục tiêu của mình là trở thành một Web Developer chuyên nghiệp, làm ra những sản phẩm có giao diện đẹp, dễ dùng và mang lại trải nghiệm tốt cho người dùng.',
  decor: {
    topLeft: { src: 'images/photo-03.jpg', alt: 'Ảnh polaroid Yến Hà giơ tay chữ V' },
    bottomLeft: { src: 'images/photo-02.jpg', alt: 'Ảnh polaroid Yến Hà chống cằm' },
    topRight: { src: 'images/photo-06.jpg', alt: 'Ảnh polaroid Yến Hà vén tóc' },
    bottomRight: { src: 'images/photo-04.jpg', alt: 'Ảnh polaroid Yến Hà chỉnh kính' },
  },
}

export type Service = { number: string; name: string; description: string }

export const servicesHeading = 'Mình làm được gì'

export const services: Service[] = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'React, TypeScript, Tailwind CSS và cả HTML/CSS/JavaScript thuần. Giao diện responsive, có chuyển động mượt và chạy tốt trên điện thoại.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Laravel (PHP) và Spring Boot (Java): REST API, đăng nhập, phân quyền theo vai trò, xử lý nghiệp vụ như giữ ghế, duyệt phiếu mượn.',
  },
  {
    number: '03',
    name: 'Database',
    description:
      'PostgreSQL trên Supabase, SQLite và MySQL. Thiết kế bảng, quan hệ, dữ liệu mẫu và bảo mật theo dòng (RLS).',
  },
  {
    number: '04',
    name: 'UI/UX & Prototyping',
    description:
      'Thiết kế giao diện trên Figma, dựng wireframe, đặc tả use case và sơ đồ trước khi bắt tay vào code.',
  },
  {
    number: '05',
    name: 'Tools & Technologies',
    description:
      'Git và GitHub, GitHub Pages, Vite, VS Code, Codespaces. Biết dùng AI agent để làm nhanh mà vẫn hiểu code mình viết.',
  },
]

export type Project = {
  number: string
  name: string
  category: string
  imageOne: string
  imageTwo: string
  imageThree: string
  description: string
  /** bỏ trống nếu là bản thiết kế chưa có link xem */
  link?: string
}

export const projectsHeading = 'Những thứ mình đã làm'

export const projects: Project[] = [
  {
    number: '01',
    name: 'CineBox',
    category: 'Laravel 12 · Supabase · Đặt vé xem phim',
    imageOne: 'images/cine-chu-meo-phi-hanh-gia.svg',
    imageTwo: 'images/cine-thanh-pho-khong-ngu.svg',
    imageThree: 'images/cine-biet-doi-bao-lua.svg',
    description:
      'Chọn ghế trên sơ đồ, giữ ghế 10 phút, vé điện tử có mã QR. Có trang soát vé cho nhân viên và dashboard doanh thu cho admin.',
    link: 'https://github.com/Hanny2005/CineBox',
  },
  {
    number: '02',
    name: 'Thư viện Tri Thức',
    category: 'React · Spring Boot · Quản lý thư viện',
    imageOne: 'images/library-home.jpg',
    imageTwo: 'images/library-catalog.jpg',
    imageThree: 'images/library-dashboard.jpg',
    description:
      'Bạn đọc tìm sách, gửi yêu cầu mượn và theo dõi hạn trả. Thủ thư duyệt phiếu, quản lý sách, thể loại và phân quyền người dùng.',
    link: 'https://hanny2005.github.io/library-management/',
  },
  {
    number: '03',
    name: 'LUMI Beauty',
    category: 'React · Vite · Web mỹ phẩm',
    imageOne: 'images/lumi-trang-chu.jpg',
    imageTwo: 'images/lumi-chi-tiet-san-pham.jpg',
    imageThree: 'images/lumi-mobile.jpg',
    description:
      'Cửa hàng mỹ phẩm phong cách editorial: Flash Sale đếm ngược, 46 sản phẩm, đánh giá sao có nhãn “Đã mua hàng”, giỏ hàng và tài khoản.',
    link: 'https://hanny2005.github.io/-DEMO_lumi-beauty_Fontend-React-/',
  },
  {
    number: '04',
    name: 'Study With Me',
    category: 'HTML · CSS · JavaScript thuần',
    imageOne: 'images/study-light.jpg',
    imageTwo: 'images/study-dark.jpg',
    imageThree: 'images/study-mobile.jpg',
    description:
      'Bàn học trên trình duyệt: Pomodoro, âm thanh nền tạo bằng Web Audio, việc cần làm, thời khóa biểu và tính GPA hệ 4 / hệ 10.',
    link: 'https://hanny2005.github.io/study-with-me/',
  },
  {
    number: '05',
    name: 'BioFarm',
    category: 'UI/UX · Web thương mại nông sản sạch',
    imageOne: 'images/biofarm-home.jpg',
    imageTwo: 'images/biofarm-products.jpg',
    imageThree: 'images/biofarm-deals.jpg',
    description:
      'Thiết kế giao diện web bán nông sản sạch: trang chủ có Flash Sale đếm ngược, combo đi chợ theo tuần, trang sản phẩm có bộ lọc theo chứng nhận, giá, xuất xứ.',
    link: 'https://github.com/Hanny2005/Figma',
  },
  {
    number: '06',
    name: 'NOIR',
    category: 'UI/UX · Mobile app giao đồ ăn',
    imageOne: 'images/noir-onboarding.jpg',
    imageTwo: 'images/noir-order.jpg',
    imageThree: 'images/noir-screens.jpg',
    link: 'https://github.com/Hanny2005/NOIR_Figma',
    description:
      'UI kit 10 màn hình cho app giao đồ ăn cao cấp: splash, onboarding, tìm kiếm, nhà hàng, chi tiết món, giỏ hàng, thanh toán, theo dõi đơn và tài khoản.',
  },
]

export const footer = {
  copy: 'Có ý tưởng muốn làm cùng? Nhắn mình qua Facebook hoặc Zalo, hay ghé GitHub xem code nhé.',
}
