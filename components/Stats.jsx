"use client"


import CountUp from "react-countup"

const stats  = [
    {
        num: 100,
        text: "Projects Completed",
    },

    {
        num: 3,
        text: "Years of Experience",
    },
    {
        num: 6,
        text: "Technologies mastered",
    },
    {
        num: 480,
        text: "Code commits"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center  gap-6 max-w-[80vw] xl:max-w-none mx-auto">
                {stats.map((item, index) => {
                    return (
                        <div
                             className="flex-1 flex gap-4   items-center  justify-center lg:justify-start xl:justfy-start"
                             key={index}
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-3xl xl:text-6xl font-extrabold"
                            />

                            <p
                               className={` ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-white/80 leading-snug`}>
                                {item.text}
                            </p>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats