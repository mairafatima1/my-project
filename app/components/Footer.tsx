import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 ">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 mt-0">
                {/* Social Media Icons */}
                <div className="flex gap-4 lg:order-1 pl-[700px] py-3"> {/* Reduced padding here */}
                    <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" aria-label="Twitter" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" aria-label="Facebook" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" aria-label="YouTube" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" aria-label="Instagram" />
                </div>

                {/* Columns */}
                <div className="flex flex-wrap gap-8 lg:gap-16 lg:order-2 ">
                    {/* Column 1: Find a Store */}
                    <div>
                        <h3 className="text-sm font-semibold mb-2">FIND A STORE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                            <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                            <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Get Help */}
                    <div>
                        <h3 className="text-sm font-semibold mb-2">GET HELP</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Order Status</Link></li>
                            <li><Link href="#" className="hover:underline">Delivery</Link></li>
                            <li><Link href="#" className="hover:underline">Returns</Link></li>
                            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                            <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                            <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: About Nike */}
                    <div>
                        <h3 className="text-sm font-semibold mb-2">ABOUT NIKE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">News</Link></li>
                            <li><Link href="#" className="hover:underline">Careers</Link></li>
                            <li><Link href="#" className="hover:underline">Investors</Link></li>
                            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Information */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
                <div className="flex mb-4 md:mb-0 gap-2">
                    <IoLocationOutline className="text-sm" />
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
