"use client" // KEEP THIS DIRECTIVE TO USE useState

import { useState, FC } from 'react';
import Image, { StaticImageData } from 'next/image';

// --- IMPORTANT: Use your actual image imports ---
import whiteArrowImage from '../assets/home-page/Footer/ffoarrow.png'; 
import blackArrowImage from '../assets/home-page/Footer/black arr.png'; 

/**
 * Interface for the CTAButton component props.
 */
interface CTAButtonProps {
    href: string;
    text: string;
}

/**
 * Reusable CTA Button Component using Tailwind CSS for Hover Effects.
 */
const CTAButton: FC<CTAButtonProps> = ({ href, text }) => {
    // State to track if the mouse is over the button
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Dynamic selection of the arrow image source (Ternary condition for image swap)
    const arrowSrc: StaticImageData = isHovered ? blackArrowImage : whiteArrowImage;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // Base styles & Group for Tailwind Hover
            className={`
                relative w-[212px] h-[60px] rounded-[30px] bg-transparent block no-underline transition-colors duration-300
                border-0 
                hover:bg-[#5C4737] 
                group
            `}
            // Event handlers for state update (triggers image swap)
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span
                className="
                    absolute top-[21px] left-6 font-inter font-medium text-base leading-none tracking-[-0.03em]
                    text-[#F6F2EB] flex items-center
                "
            >
                {text}
            </span>
            
            {/* Circle Container */}
            <div 
                className={`
                    absolute top-[3px] left-[155px] w-[50px] h-[50px] rounded-full
                    bg-white flex items-center justify-center 
                    transition-transform duration-300
                    
                    // Rotation and movement on hover using the 'group-hover' utility
                    group-hover:translate-x-[5px]
                `}
            >
                <div 
                    className="
                        transition-transform duration-300
                        group-hover:rotate-90
                    "
                >
                    <Image 
                        src={arrowSrc} // Dynamic image source
                        alt="arrow" 
                        width={18} 
                        height={18} 
                        // Note: The 'style={{ margin: 'auto' }}' is covered by 'flex items-center justify-center' on the parent circle div.
                    />
                </div>
            </div>
        </a>
    );
};

export default CTAButton;