const sentences = [
    "당신은 당신의 본능과 즐거운 육체적 충동들을 밀려오는 그대로 따른다.",
    "당신은 서로간에 연관성이 없는 여러 가지 다양한 아이디어를 제안하며 그들이 가진 잠재력을 찾는다.",
    "당신은 성공의 척도를 / 수치화나 그에 투자한 시간을 계산하는 등의 / 객관적인 방법으로 평가한다.",
    "당신은 타인의 감정을 책임지고 보살피려는 경향이 있다.",
    "당신은 촉이 오는 것을 경험하거나 먼 미래를 예지한다.",
    "당신은 당신이 직면한 상황을 당신의 경험과 비교하고 / 그 상황이 익숙한지 혹은 새로운지를 신경쓴다.",
    "당신은 사전적 정의와 논리적 추론, 또는 기타 방식의 추론에 이끌린다.",
    "당신은 어떠한 것에 있어 좋고 나쁨이 분명히 존재한다고 느낀다.",
    "당신은 타인의 부탁 또는 요구를 / 마치 자신의 것처럼 연민을 느껴 / 수행한다.",
    "당신은 누군가를 납득시키기 위해 / (서로에게 모두) 명확한 증거를 / 사용하여 건설적인 논쟁을 펼친다.",
    "당신은 변화에 대한 명확한 통찰력을 얻는 데에 성공한다.",
    "당신은 무엇이 신뢰할 만한지 알기 위해 당신의 경험을 다른 경험들과 비교해 본다.",
    "당신은 당신이 원하거나 동기를 부여받는 것, 또는 당신에게 좋다고 생각하는 것과의 접촉을 유지한다.",
    "당신은 문제를 냉철하게 해결해야 할 상황에서 / 최소한의 노력으로도 힘을 잘 발휘한다.",
    "당신은 현재의 스릴과 육체적 경험을 즐긴다.",
    "당신은 임의의 상호작용과 규칙을 파악하는 것을 즐긴다.",
    "당신은 타인과 잘 지내기 위해 공통의 가치와 감정, 통상적인 관념을 파악하고 고수한다.",
    "당신은 한 번에 여러 가지 목표로 나아갈 때 효율성을 증대시키기 위한 종합적인 계획을 세운다.",
    "당신은 당신의 개인적인 행복을 위하여 자유롭게 원하는 대로 활동하는 것을 즐긴다.",
    "당신은 문제 해결에 있어서 여러 가지 개념을 동시에 간결하게 참고한다.",
    "당신은 초자연적인 상태나 순간적인 감정의 폭발에서 깊은 깨달음을 얻는다.",
    "당신은 일에 있어서 각 과정이 모두 예상 가능하며 정확하게 하나하나를 끝낼 수 있도록 단계적으로 일처리를 한다.",
    "당신은 인생에서 마법같은 순간들과 의미 있는 우연들이 발생할 때마다 이에 관심을 가진다.",
    "당신은 선택에 직면한 상태에서 이득을 보기 위해 신속하게 행동한다.",
    "당신은 당신 자신 혹은 타인에게 바라는 것에 있어 항상 진실되다.",
    "당신은 명확한 원칙과 맞지 않는 것을 분석하고 지적한다.",
    "당신은 무엇이 사회의 관습과 일반적인 기준인지 알기 위하여 시간을 들이고 많은 정보를 검토한다.",
    "당신은 상징적인 것, 가공되지 않은 것, 불가사의한 것들에 매력을 느낀다.",
    "당신은 당신의 한계를 알기 위해 눈으로 확인 가능한 단서들을 즉각적으로 읽어낸다.",
    "당신은 자신에게 한계를 두지 않고 맥락을 계속 따라가며 새로운 아이디어를 창출한다.",
    "당신은 일관성 있는 추론을 한다.",
    "당신은 모임을 주도하거나 사람들을 보살피는 데에 관여하며 사람들을 편안하게 한다.",
    "당신은 타인이 일을 제때 처리하도록 물질적인 효율을 기반으로 한 여러 가지 방안을 계획한다.",
    "당신은 결속감을 느끼기 위해 조직에 소속된 모든 사람들과 손쉽게 개인적으로 연락한다.",
    "당신은 이론이나 관점, 틀을 뒷받침하기 위하여 정의나 개념을 미세하게 조정한다.",
    "당신은 진정한 자신을 위하여 과연 무엇이 믿을 만한 가치가 있는지 평가한다.",
    "당신은 현재 일어나고 있는 일의 관계를 여러 가지 임의의 맥락에서 바라본다.",
    "당신은 타인에게 단순히 자신의 존재감을 느끼게 함으로써 행동을 자극하고 결과를 도출한다.",
    "당신은 당신만의 방식으로 자신의 내면에 집중하여 추후 자신에게 필요할 것 같은 모습으로 변화한다.",
    "당신은 같은 일이나 작업을 매일 반복하며 이를 편안하게 수행한다.",
    "당신은 타인과 어울리고 하나가 된 것 같은 친밀감을 느낀다.",
    "당신은 수치화와 같이 특정 개인과 상관없는 측정 방식에 기반하여 결정을 내린다.",
    "당신은 선택하기로 한 것이 중요한 가치들과 조화를 이루는지 계속 검토한다.",
    "당신은 특정한 것의 작동 원리를 알기 위해 그것을 직접 분해해 본다.",
    "당신은 혁신적인 성과를 위해서 스스로를 정신적 한계까지 밀어붙인다.",
    "당신은 현재의 상황과 이전까지의 상황이 서로 같지 않음을 지적한다.",
    "당신은 브레인스토밍을 통하여 나오는 것을 믿는다.",
    "당신은 주변 사람이나 상황과 물리적으로 쉽게 동화된다."
];

const make_question = (text, count) => {
    const li = document.createElement('li');
    const z_count = count.toString().padStart(2, '0');
    //const weight = [`${z_count}1`, `${z_count}2`, `${z_count}3`, `${z_count}4`, `${z_count}5`]
    const weight = [1, 2, 3, 4, 5]

    li.textContent = text;

    weight.forEach(element => {
        const radio = document.createElement('input');
        radio.type = "radio"
        radio.name = count
        radio.value = element

        radio.checked = "checked"
        li.appendChild(radio)
    })

    return li
}   

const form = document.createElement('form');
const ul = document.createElement("ol");

form.action = "mbti"
form.method = "get"

sentences.forEach((element, idx) => {
        ul.appendChild(make_question(element, idx))
    }
)

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // 기본 제출 동작 방지

//     const selectedRadioButton = document.querySelectorAll('input:checked');
//     //const selectedValue = selectedRadioButton ? selectedRadioButton.value : '';

//     // 선택된 값 처리
//     const res = Array.from(selectedRadioButton).map(element => {
//         return element.value
//     }
//     );

//     console.log(res)

//     // 여기서 선택된 값들을 서버로 전송하거나 추가적인 처리를 수행할 수 있습니다.

//     const currentURL = window.location.href;

//     console.log(currentURL)
//   });

const sumbit = document.createElement('button');



sumbit.textContent = "확인";
sumbit.type = 'submit'

form.appendChild(ul)
form.appendChild(sumbit);
document.body.appendChild(form);