export function AboutSection() {
  return (
    <section id="about" className="bg-kbmk-red py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
                <div className="text-center">
                  <div className="w-8 h-8 bg-kbmk-red rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <div className="text-xs font-bold text-gray-800">KBMK</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Unit Kegiatan Mahasiswa</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">B</span>
                  </div>
                  <p className="text-sm text-white font-medium">BINUS UNIVERSITY</p>
                </div>
              </div>
            </div>

            <p className="text-white leading-relaxed text-sm">
              Keluarga Besar Mahasiswa Khonghucu (KBMK) merupakan organisasi atau wadah perkumpulan yang secara langsung
              melayani mahasiswa Binus University yang beragama Khonghucu dan juga untuk memperdalam pemahaman tentang
              agama Khonghucu.
            </p>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-kbmk-red">3</h4>
                <div className="text-right">
                  <div className="text-lg font-bold text-kbmk-red">Divisions</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-kbmk-red rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">PUBLIC RELATIONS & ENTREPRENEURSHIP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-kbmk-red rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">RESOURCES EDUCATION & DEVELOPMENT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-kbmk-red rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">DESIGN & SOCIAL MEDIA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/group-photo-of-kbmk-students-and-staff-at-universi.jpg" alt="KBMK Team Photo" className="w-full rounded-lg shadow-lg" />
            <div className="absolute bottom-4 right-4 bg-kbmk-red text-white px-4 py-2 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold">22</div>
                <div className="text-xs">Staff and Activist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
