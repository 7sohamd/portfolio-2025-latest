export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Portfolio. Built with Next.js, Three.js, and Tailwind.
                </p>
            </div>
        </footer>
    );
}
