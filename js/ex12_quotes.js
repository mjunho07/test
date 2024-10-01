const quotes = [
    {
        quote : "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
        autor : "John Wayne"
    },
    {
        quote : "행동은 말보다 더 새빨간 거짓말을 한다.",
        autor : "Carolyn Wells"
    },
    {
        quote : "학생이 되기를 멈춘 자는 한 번도 학생인 적이 없었던 자이다.",
        autor : "George Iles"
    },
    {
        quote : "모든 성공의 비결은 자신을 부인하는 법을 아는 것이다. 스스로를 통제할 수 있음을 증명하면 당신은 교육받은 사람이고, 그렇지 못하면 다른 어떤 교육도 쓸모가 없다.",
        autor : "R. D. Hitchcock"
    },
    {
        quote : "어떤 것을 완전히 알려거든 그것을 다른 이에게 가르쳐라.",
        autor : "Tryon Edwards"
    },
    {
        quote : "교육 없는 천재는 광산 속의 은이나 마찬가지이다.",
        autor : "Benjamin Franklin"
    },
    {
        quote : "만약 당신의 부모가 한 번도 아이를 가진 적이 없다면 당신도 그럴 가능성이 크다.",
        autor : "Dick Cavett"
    },
    {
        quote : "교육은 암기를 얼마나 열심히 했는지, 혹은 얼마나 많이 아는지가 아니다. 교육은 아는 것과 모르는 것을 구분할 줄 아는 능력이다.",
        autor : "Anatole France"
    },
    {
        quote : "참된 스승은 제자들이 자신의 개인적 영향을 받지 않도록 방어한다.",
        autor : "Amos Bronson Alcott"
    },
    {
        quote : "배우고 때로 익히면 또한 기쁘지 아니한가 (學而時習之 不亦說乎 / 학이시습지 불역열호)",
        autor : "공자"
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.autor;
//Math.round() = 소수 반올림
//Math.ceil() = 소수 올림
//Math.floor() = 소수 내림
 