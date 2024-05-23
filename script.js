const questions = [
    { id: 1, text: "Q:あなたの主要な競合企業はどの企業ですか？また、それぞれの市場シェアは大体どのくらいですか？" },
    { id: 2, text: "Q:あなたの所属する業界では、価格、品質、サービスのどれが一番競争の中心ですか？" },
    { id: 3, text: "Q:あなたの所属する業界での競争は激しくなっていますか？なっていませんか？また、その主な理由は何だと思いますか？" },
    { id: 4, text: "Q:あなたの業界に新しく参入するにはどんな障壁がありますか？（例えば、規制、特許、ブランド力など）" },
    { id: 5, text: "Q:新しく参入する企業が必要な初期投資はどのくらいですか？" },
    { id: 6, text: "Q:あなたの業界の既存企業は新規参入者に対してどのように対抗していますか？" },
    { id: 7, text: "Q:あなたの業界の製品やサービスに対する主要な代替品は何ですか？" },
    { id: 8, text: "Q:代替品の品質や価格は、あなたの業界の製品やサービスと比べてどうですか？" },
    { id: 9, text: "Q:お客様が代替品を選ぶ主な理由は何ですか？" },
    { id: 10, text: "Q:あなたの業界の主要な顧客層はどんな人たちですか？それぞれの購買力はどのくらいですか？" },
    { id: 11, text: "Q:あなたの顧客は、価格やサービス内容についてどれくらいの影響力を持っていますか？" },
    { id: 12, text: "Q:顧客が他社の製品に乗り換える時の（金銭的、心理的な）コストはどのくらいですか？" },
    { id: 13, text: "Q:あなたの業界で主要な供給者はどの企業ですか？それぞれの市場シェアはどのくらいですか？" },
    { id: 14, text: "Q:供給者が提供する原材料やサービスに代替品はどのくらいありますか？" },
    { id: 15, text: "Q:供給業者は価格や供給条件についてどれくらいの影響力を持っていますか？" },
];

let currentQuestionIndex = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex].text;
        $("#chatbox").append(`<div class="chat-message bot"><div class="message question-text">${question}</div></div>`);
    } else {
        $("#chatbox").append(`<div class="chat-message bot"><div class="message">質問は以上です。お疲れ様でした。</div></div>`);
        $("#chatbox").append(`<button id="analysisButton">ファイブフォース分析へ</button>`);
        $("#analysisButton").on("click", function () {
            window.location.href = "five_force.html";
        });
    }
    scrollBottom();
}

function scrollBottom() {
    $("#chatbox").scrollTop($("#chatbox")[0].scrollHeight);
}

$("#chatAnswer").on("submit", function (event) {
    event.preventDefault();
    const userAnswer = $("#userAnswer").val();
    if (userAnswer.trim() !== "") {
        $("#chatbox").append(`<div class="chat-message user"><div class="message">${userAnswer}</div></div>`);
        localStorage.setItem(`question${questions[currentQuestionIndex].id}`, userAnswer);
        currentQuestionIndex++;
        $("#userAnswer").val("");
        setTimeout(showQuestion, 500);
    }
});

showQuestion();
