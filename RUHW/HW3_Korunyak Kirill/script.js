$(function () {
  // Массив объектов с текстом
  let article = [
    {
      text: "Как-то раз",
    },
    {
      text: "Ёжик научился дышать попой",
    },
    {
      text: "Сел на пенёк и задохнулся...",
    },
  ];

  // Генераия Конопок по длинне массива article
  GenerateButtons(article.length);
  let buttons = $(document).find(".buttons button");

  $(buttons).click(function (e) {
    // change active button
    $(buttons).removeClass("active");
    $(this).addClass("active");
    // change text
    $(".content").empty();
    let dataArticle = "";
    if ($(this).attr("id") == "all") {
      $.each(article, function (index, el) {
        dataArticle = dataArticle + `<h2>${el.text}</h2>`;
      });
    } else {
      dataArticle = `<h2>${article[$(this).attr("id") - 1].text}</h2>`;
    }
    $(".content").append(dataArticle);
  });

  function GenerateButtons(length) {
    dataButtons = "";
    for (let index = 0; index < length; index++) {
      dataButtons =
        dataButtons +
        `<li>
		<button id="${index + 1}">${index + 1}</button>
	</li>`;
    }
    // generate button "All"
    if (length > 1) {
      dataButtons =
        dataButtons +
        `<li>
			<button id="all">All</button>
		</li>`;
    }

    $(".buttons").append(dataButtons);
  }
});
