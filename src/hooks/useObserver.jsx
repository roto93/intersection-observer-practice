import React, { useState, useEffect, useRef } from 'react'

export const useObserver = (options) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(ref.current)
        }, options)
        if (ref.current) observer.observe(ref.current)

    }, [ref, options])

    return [ref, isVisible]
}

