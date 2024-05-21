export const opacityTransition = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration:0.4,
            delayChildren: 0.5,
            when:'beforeChildren'
        }
    }
}

export const TranslateYTransition = {
    hidden:{
        display:'none',
        y:'-25px',
        opacity:0,
        transition: {
            duration:0.2,
            ease: [0.17, 0.67, 0.83, 0.97]
        }
    },
    show: {
        opacity:1,
        y:'0',
        display:'block',
        transition: {
            duration:0.4,
            delayChildren: 0.5
        }
    }

}