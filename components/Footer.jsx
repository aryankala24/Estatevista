export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm pt-10 pb-6">

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-xs">
            © 2025 AryanKala.com. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <img
              src="/images/aryan.jpg" // Replace with actual path
              alt="Aryan Kala"
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-gray-400 text-xs">
              Created by ARYAN KALA
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-500 text-[10px]">
          Disclaimer: EstateVista.com is an advertising platform to connect buyers and sellers and is not a party to any transaction. We are not responsible for resolving any disputes between users. All images and information are for representation only and subject to change without notice.
        </p>
    </footer>
  );
}
