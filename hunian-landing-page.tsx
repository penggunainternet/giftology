import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Check,
  Star,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HunianLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Home className="h-6 w-6 text-emerald-800" /> */}
            <span className="text-xl font-bold text-emerald-800">
              Giftology
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#beranda"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700"
            >
              Beranda
            </Link>
            <Link
              href="#properti"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700"
            >
              Produk
            </Link>
            {/* <Link href="#fasilitas" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Fasilitas
            </Link> */}
            <Link
              href="#testimoni"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700"
            >
              Testimoni
            </Link>
            <Link
              href="#kontak"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700"
            >
              Kontak
            </Link>
          </nav>
          <Button className="bg-emerald-800 hover:bg-emerald-900 text-white">
            Hubungi Kami
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="beranda" className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/jkw.webp"
              alt="Hunian Mewah"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
                Karena Setiap Momen Layak Dirayakan
              </h1>
              <p className="text-lg md:text-xl text-emerald-800 mb-8">
                Giftology adalah layanan giftbox yang menyediakan berbagai
                pilihan kotak hadiah eksklusif untuk merayakan momen spesial,
                seperti ulang tahun, anniversary, wisuda, dan perayaan lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#properti">
                  <Button className="bg-emerald-800 hover:bg-emerald-900 text-white text-lg px-8 py-6">
                    Lihat Produk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Property Showcase */}
        <section id="properti" className="py-16 bg-amber-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-12">
              Produk Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property 1 */}
              <Card className="overflow-hidden border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/ivgsfj7y.png"
                    alt="Rumah Tipe Melati"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-emerald-900">
                      Tipe Melati
                    </h3>
                    <span className="text-lg font-semibold text-emerald-800">
                      Rp 850 juta
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    {/* <MapPin className="h-4 w-4" /> */}
                    {/* <span className="text-sm">Bintaro, Jakarta Selatan</span> */}
                  </div>
                  <p className="text-emerald-800 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic molestiae quae
                  </p>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>

              {/* Property 2 */}
              <Card className="overflow-hidden border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/logo-garuda-pancasila.png"
                    alt="Apartemen Tipe Dahlia"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-emerald-900">
                      Tipe Dahlia
                    </h3>
                    <span className="text-lg font-semibold text-emerald-800">
                      Rp 1,2 miliar
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    {/* <MapPin className="h-4 w-4" /> */}
                    {/* <span className="text-sm">Kemang, Jakarta Selatan</span> */}
                  </div>
                  <p className="text-emerald-800 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic molestiae quae.
                  </p>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>

              {/* Property 3 */}
              <Card className="overflow-hidden border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/fufu.jpg"
                    alt="Rumah Tipe Anggrek"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-emerald-900">
                      Tipe Anggrek
                    </h3>
                    <span className="text-lg font-semibold text-emerald-800">
                      Rp 650 juta
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    {/* <MapPin className="h-4 w-4" /> */}
                    {/* <span className="text-sm">BSD City, Tangerang</span> */}
                  </div>
                  <p className="text-emerald-800 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic molestiae quae.
                  </p>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </div>
            {/* <div className="text-center mt-12">
              <Button variant="outline" className="border-amber-800 text-emerald-800 hover:bg-amber-100">
                Lihat Semua Properti
              </Button>
            </div> */}
          </div>
        </section>

        {/* Features/Amenities */}
        <section id="fasilitas" className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-12">
              Keunggulan Produk Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-emerald-800" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  Mahal
                </h3>
                <p className="text-emerald-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                  molestiae quae, accusamus commodi earum illo quidem veniam
                  praesentium, ducimus adipisci voluptas facilis expedita dolor
                  debitis recusandae? Suscipit architecto vel praesentium.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-emerald-800" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  Mahal
                </h3>
                <p className="text-emerald-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, ipsam. Dolores fugiat quas hic illum accusamus
                  exercitationem asperiores nesciunt soluta, ab vitae ea ad
                  consectetur, saepe neque illo voluptatibus voluptatem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-emerald-800" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  Mahal
                </h3>
                <p className="text-emerald-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  amet ratione itaque! Excepturi doloremque laudantium eligendi
                  maxime quisquam, aspernatur exercitationem placeat sed
                  pariatur rerum minima nam officia, consectetur perspiciatis
                  voluptatem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-emerald-800" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  Mahal
                </h3>
                <p className="text-emerald-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, ipsam. Dolores fugiat quas hic illum accusamus
                  exercitationem asperiores nesciunt soluta, ab vitae ea ad
                  consectetur, saepe neque illo voluptatibus voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimoni" className="py-16 bg-amber-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-12">
              Apa Kata Mereka?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="border-amber-200 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                  </div>
                  <p className="text-emerald-800 italic mb-6">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, ipsam. Dolores fugiat quas hic illum accusamus
                    exercitationem asperiores nesciunt soluta, ab vitae ea ad
                    consectetur, saepe neque illo voluptatibus voluptatem."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-200 overflow-hidden">
                      <Image
                        src="/images/person-1.jpg"
                        alt="Budi Santoso"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">
                        Budi Santoso
                      </h4>
                      <p className="text-sm text-emerald-700">
                        Pemilik Tipe Melati
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-amber-200 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                  </div>
                  <p className="text-emerald-800 italic mb-6">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, ipsam. Dolores fugiat quas hic illum accusamus
                    exercitationem asperiores nesciunt soluta, ab vitae ea ad
                    consectetur, saepe neque illo voluptatibus voluptatem."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-200 overflow-hidden">
                      <Image
                        src="/images/person-2.jpg"
                        alt="Dewi Lestari"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">
                        Dewi Lestari
                      </h4>
                      <p className="text-sm text-emerald-700">
                        Pemilik Tipe Dahlia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-amber-200 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-emerald-500" />
                  </div>
                  <p className="text-emerald-800 italic mb-6">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, ipsam. Dolores fugiat quas hic illum accusamus
                    exercitationem asperiores nesciunt soluta, ab vitae ea ad
                    consectetur, saepe neque illo voluptatibus voluptatem.""
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-200 overflow-hidden">
                      <Image
                        src="/images/person-3.jpg"
                        alt="Ahmad Hidayat"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">
                        Ahmad Hidayat
                      </h4>
                      <p className="text-sm text-emerald-700">
                        Pemilik Tipe Anggrek
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rayakan Momen Spesial Bersama Giftology!
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white">
                Giftology membantu Anda memberikan kejutan istimewa dengan
                kemasan menarik dan pilihan isi hadiah yang dapat disesuaikan
                sesuai kebutuhan. Hubungi kami sekarang untuk informasi lebih
                lanjut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-emerald-800 hover:bg-emerald-50 text-lg px-8 py-6">
                  Hubungi Kami
                </Button>
                {/* <Button variant="outline" className="border-white text-white hover:bg-amber-700 text-lg px-8 py-6">
                  Jadwalkan Kunjungan
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="kontak"
        className="bg-amber-50 text-emerald-800 font-bold py-12"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <Home className="h-6 w-6 text-white" /> */}
                <span className="text-xl font-bold text-emerald-800">
                  Gifttology
                </span>
              </div>
              <p className="mb-4">
                Menyediakan Giftbox berkualitas sejak 2025.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/giftology.ofc?igsh=bG9zNms4a2VoemRh&utm_source=qr"
                  className="text-emerald-800 hover:text-emerald-300"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                {/* <Link
                  href="#"
                  className="text-emerald-800 hover:text-emerald-300"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-emerald-800 hover:text-emerald-300"
                >
                  <Twitter className="h-5 w-5" /> */}
                {/* </Link> */}
              </div>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Produk</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Rumah
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Apartemen
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Ruko
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Tanah
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Lokasi</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Jakarta Selatan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Jakarta Timur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Tangerang
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300">
                    Bekasi
                  </Link>
                </li>
              </ul>
            </div> */}

            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-800">
                Kontak
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>
                    Jl. Imam Bonjol No.207, Kota Semarang, Jawa Tengah
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+62 21 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>info@Giftology.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-700 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Giftology. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
