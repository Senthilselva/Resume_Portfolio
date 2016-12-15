$(document).ready(function(){

	$(".button-collapse").sideNav();
	$('.parallax').parallax();


var createSkillBadges= function(divName){
	var skillArr=["HTML-5", "CSS-3", "JavaScript", "JQuery", "Firebase", "NodeJS", "ReactJS","MySQL", "MongoDB", "GitHub"]
	var cardTag = $("<div>");
	cardTag.addClass("card-content");
	var cardTitle = $("<h5>");
	cardTitle.addClass("card-title")
	cardTitle.addClass("blue-grey-text text-darken-4")
	cardTitle.text("Competent");
	cardTag.append(cardTitle);
	console.log(cardTag);
	$("."+divName).append(cardTag);


	for(var i=0; i < skillArr.length; i++){
		var chipDiv = $("<div>");
		chipDiv.addClass("col m3");

		var skillChip = $("<div>");
		skillChip.addClass("chip animated rotateIn");
		skillChip.addClass("blue-grey white-text");


		var imgTag = $("<img>");
		imgTag.attr("src", "assets/images/project/"+skillArr[i]+".png")
		skillChip.text(skillArr[i]);
		skillChip.append(imgTag)
		
			
		// $(skillChip).append(chipDiv);
		$(chipDiv).append(skillChip);

		$("."+divName).append(chipDiv);

	}

}

createSkillBadges("skillMainPage");

createSkillBadges("skillhomework");


var createHomeWorkLinks = function(divName){
	var apps= [{skill:"JavaScript", link: "https://github.com/Senthilselva/Week3-HW", name:"Hang Man"},
			{skill:"JQuery", link: "https://github.com/Senthilselva/week-4-game", name:"RPG - Starwars"},
			{skill:"JQuery&JavaScript", link: "https://github.com/Senthilselva/week-5-game", name:"Time Triva"},
			{skill:"Rest API", link: "https://github.com/Senthilselva/Giphy", name:"Giphy"},
			{skill:"Firebase", link: "https://github.com/Senthilselva/Giphy", name:"Rock Paper Siccors"},
			{skill:"NodeJS-Express", link: "https://github.com/Senthilselva/FriendFinder", name:"Friend Finder"},
			{skill:"NodeJS-Express-MySQL-ORM", link: "https://github.com/Senthilselva/Eat-Da-Burger", name:"Eat Da Burger"},
			{skill:"NodeJS-Express-MySQL-Sequelize", link: "https://github.com/Senthilselva/SequelizedBurger", name:"Sequelize Burger"}
	]		
	var listTag = $("<ul>");

	for(var key in apps){
		var newDetail= apps[key];
		console.log(apps[key].link)
		var listItem = $("<li>");
		var anchor = $("<a>");
		anchor.attr("href",apps[key].link)
		anchor.html(apps[key].skill + "-"+apps[key].name);

		listItem.append(anchor);
		listTag.append(listItem);
	}
	$("."+divName).append(listTag)
}
 
 createHomeWorkLinks("homeWorkLink");
});
