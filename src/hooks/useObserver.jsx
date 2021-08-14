import { useState, useEffect, useRef } from 'react'

export const useObserver = (options) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let dom = ref.current
        const observer = new IntersectionObserver(([entry], observer) => {
            //This function will call once entry.isIntersecting change.
            //The first argument, entries, is an array. Destructure it and call it entry
            setIsVisible(entry.isIntersecting)
        }, options)

        if (dom) {
            observer.observe(dom)
        }

        return () => {
            if (dom) {
                observer.unobserve(dom)
            }
        }
    }, [options])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //         setIsVisible(entry.isIntersecting)
    //         if (entry.isIntersecting) observer.unobserve(ref.current)
    //     }, options)
    //     if (ref.current) observer.observe(ref.current)

    // }, [ref, options])

    return [ref, isVisible]
}

