/* Selsct Elements */
const fileUploaders = document.querySelectorAll(
  `.file-manager-page .files .file-box .file-uploader`
);
const showNotificationBtn = document.querySelector(".notification-btn");
// All Widgets In Dashboard Page
const allWidgetsDahsboard = document.querySelectorAll(
  ".regular-box-tilte .widget-name"
);

// All Settings Box Control Settings Page
const allSettingsBox = document.querySelectorAll(
  "section .regular-box-tilte .setting-box-name"
);

// All  Projects Name In Projects Page
const allProjectsName = document.querySelectorAll(
  `.project-box .project-tilte .project-name`
);

// All Courses Name In Course Page
const allCoursesName = document.querySelectorAll(
  `.course-box .course-details .course-name`
);
//
const showCourseInfoBtns = document.querySelectorAll(
  ".course-box .course-details .course-info-btn"
);

// All Files Name In Files Page
const allFilesName = document.querySelectorAll(
  `.file-box .file-info .file-name`
);

// All Friends Name In Friends Page
const allFriendsName = document.querySelectorAll(
  `.friend-box .friend-info .friend-name`
);
const goFriendProfileBtn = document.querySelectorAll(
  `.friends-page .friend-box .go-profile-btn`
);

// Search Input
const searchInput = document.getElementById("serach-input");

// For Generate Random File Uplaoder User, Just For Testing
const uplaodersArr = [
  "Admin",
  "Programmer",
  "coder",
  "Sammy",
  "Designer",
  "Zezo",
  "Developer",
  "MoMo90",
  "Sale7",
  "Uploader",
  "User505",
];
fileUploaders.forEach(function (uploader) {
  const randomUplader = Math.floor(Math.random() * uplaodersArr.length);
  uploader.textContent = uplaodersArr[randomUplader];
});

// Add Functionality For Search Input
searchInput.addEventListener("keyup", function (e) {
  const searchText = searchInput.value.trim().toLowerCase();
  if (document.title.trim().toLowerCase() === "projects") {
    searchFunc(searchText, allProjectsName);
  } else if (document.title.trim().toLowerCase() === "courses") {
    searchFunc(searchText, allCoursesName);
  } else if (document.title.trim().toLowerCase() === "files") {
    searchFunc(searchText, allFilesName);
  } else if (document.title.trim().toLowerCase() === "friends") {
    searchFunc(searchText, allFriendsName);
  } else if (document.title.trim().toLowerCase() === "dashboard") {
    searchFunc(searchText, allWidgetsDahsboard);
  } else if (document.title.trim().toLowerCase() === "settings") {
    searchFunc(searchText, allSettingsBox);
  }
});

// Main Function To Search
function searchFunc(textSearch, searchList) {
  if (textSearch !== "") {
    searchList.forEach(function (projectName) {
      projectName.parentElement.parentElement.classList.remove("hidden-box");
      if (!projectName.textContent.trim().toLowerCase().includes(textSearch)) {
        projectName.parentElement.parentElement.classList.add("hidden-box");
      }
    });
  } else {
    searchList.forEach(function (projectName) {
      projectName.parentElement.parentElement.classList.remove("hidden-box");
    });
  }
}

// Add Functionality To Notification Button
const notificationsListTest = [
  {
    notificationImage: `upload.png`,
    notificationTitle: `6 PDF Files have Been Uploaded`,
    notificationDate: `Today 6:03AM`,
  },
  {
    notificationImage: `badge.png`,
    notificationTitle: `2 Users get Unlocked The 10 Skills Badge`,
    notificationDate: `Today 5:40AM`,
  },
  {
    notificationImage: `add-friends.png`,
    notificationTitle: `Muhammad Hassan Send You Friend Request`,
    notificationDate: `Today 4:00AM`,
  },
  {
    notificationImage: `upload.png`,
    notificationTitle: `3 Images Files Have Been Uploaded`,
    notificationDate: `Yesterday 11:06PM`,
  },
  {
    notificationImage: `upload.png`,
    notificationTitle: `2 HTML Files Have Been Uploaded`,
    notificationDate: `Yesterday 9:03AM`,
  },
  {
    notificationImage: `project-completed.png`,
    notificationTitle: `2 Projects Have Been Completed`,
    notificationDate: `Yesterday 3:30AM`,
  },
  {
    notificationImage: `shopping-bag.png`,
    notificationTitle: `User505 Bought The Front-End Diplma`,
    notificationDate: `Yesterday 3:34AM`,
  },
  {
    notificationImage: `course-add.png`,
    notificationTitle: `Instructor Elzero add New Course`,
    notificationDate: `Yesterday 3:36AM`,
  },
  {
    notificationImage: `shopping-bag.png`,
    notificationTitle: `Te7a Bought The Web Design Diplma`,
    notificationDate: `Yesterday 3:39AM`,
  },
];

showNotificationBtn.addEventListener("click", function () {
  // this.style.display = "none";
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    creattNotificationMenu(notificationsListTest);
    document
      .getElementById("close-notificatios-btn")
      .addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove();
        this.classList.toggle("active");
      });
  } else {
    document.querySelector(".notifications-toggle-menu").remove();
  }
});

// Function to Create Notification Menu
function creattNotificationMenu(notificationsListTest) {
  // Notification Parent
  const notificationMenu = document.createElement("div");
  notificationMenu.className = `notifications-toggle-menu`;

  // Close Notification Button
  const closeNotificationBnt = document.createElement("button");
  closeNotificationBnt.id = `close-notificatios-btn`;

  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("fa-solid", "fa-close");
  closeNotificationBnt.appendChild(buttonIcon);

  // append to Notification Parent
  notificationMenu.appendChild(closeNotificationBnt);

  // notifications Container
  const notificationsList = document.createElement("ul");
  notificationsList.className = `notifications`;
  for (let i = 0; i < notificationsListTest.length; i++) {
    const notific = document.createElement("li");

    const notificImage = document.createElement("img");
    notificImage.src = `imgs/notifications/${notificationsListTest[i].notificationImage}`;
    notificImage.alt = `notification ${i + 1}`;

    // append image to notific li
    notific.appendChild(notificImage);

    const notificDetails = document.createElement("div");
    notificDetails.className = `notification-details`;

    const notificationTitle = document.createElement("h4");
    notificationTitle.className = "notification-title";
    notificationTitle.appendChild(
      document.createTextNode(`${notificationsListTest[i].notificationTitle}`)
    );
    const notificationDate = document.createElement("p");
    notificationDate.className = "notification-date";
    notificationDate.appendChild(
      document.createTextNode(`${notificationsListTest[i].notificationDate}`)
    );

    // append notification namr & det to details div
    notificDetails.appendChild(notificationTitle);
    notificDetails.appendChild(notificationDate);

    // append notific details to li notific
    notific.appendChild(notificDetails);

    // append li notific to ul
    notificationsList.appendChild(notific);
  }

  // append Notifications List to Notification Parent
  notificationMenu.appendChild(notificationsList);

  document.querySelector(".content-area").appendChild(notificationMenu);
}

/* */
/* */
/* */

// Function To Create Course Nore Info
function createCourseInfoPopUp(
  courseName,
  courseTextInfo,
  contentList,
  targetImage
) {
  // Create Course More Info Container
  const coursesInfoContainer = document.createElement("div");
  coursesInfoContainer.className = `courses-info-container`;

  // Create Course More Info Container
  const coursesMoreInfo = document.createElement("div");
  coursesMoreInfo.className = `courses-more-info`;

  // Close Courses More Info Button
  const closeCourseInfoBtn = document.createElement("button");
  closeCourseInfoBtn.id = `close-info-btn`;

  const buttonIcon = document.createElement("i");
  buttonIcon.classList.add("fa-solid", "fa-close");
  closeCourseInfoBtn.appendChild(buttonIcon);

  // append to Course More Info Container
  coursesMoreInfo.appendChild(closeCourseInfoBtn);

  // Create Image Div
  const imageDiv = document.createElement("div");
  imageDiv.className = `course-info-image`;

  const image = document.createElement("img");
  image.src = `${targetImage}`;
  image.alt = `Course Image`;
  imageDiv.appendChild(image);
  // append to Course More Info Container
  coursesMoreInfo.appendChild(imageDiv);

  // Create Details Div
  const courseMoreDetails = document.createElement("div");
  courseMoreDetails.className = `course-more-details`;

  // Create Course Name
  const courseNameH4 = document.createElement("h4");
  courseNameH4.className = `course-name`;
  courseNameH4.appendChild(document.createTextNode(`${courseName}`));

  // Create Course text Paragraph
  const courseParagraph = document.createElement("p");
  courseParagraph.appendChild(document.createTextNode(`${courseTextInfo}.`));
  // Create Course List Headetr
  const courseListHeader = document.createElement("h5");
  courseListHeader.appendChild(document.createTextNode(`Course Content`));

  courseMoreDetails.appendChild(courseNameH4);
  courseMoreDetails.appendChild(courseParagraph);
  courseMoreDetails.appendChild(courseListHeader);

  // create Content Lists
  const courseContentUL = document.createElement("ul");
  courseContentUL.className = `course-content`;

  for (let i = 0; i < contentList.length; i++) {
    const contentLi = document.createElement("li");
    contentLi.appendChild(document.createTextNode(`${contentList[i]}`));
    courseContentUL.appendChild(contentLi);
  }
  courseMoreDetails.appendChild(courseContentUL);
  // append Details Div To More Info Container
  coursesMoreInfo.appendChild(courseMoreDetails);
  coursesInfoContainer.appendChild(coursesMoreInfo);

  document.querySelector(".content-area").appendChild(coursesInfoContainer);
}

const allCoursesList = [
  {
    courseName: "Mastering Web Design",
    contentList: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SASS",
      "MySql",
      "PHP & Laravel",
    ],
  },
  {
    courseName: "Mastering Data Analyst",
    contentList: [
      "Introduction To Data Analysis",
      "Process",
      "Types",
      "Data Mining",
      "Chardinalities",
      "Applications",
      "Big Data Analysis",
    ],
  },
  {
    courseName: "Mastering Data Base",
    contentList: [
      "Big Intro To Data Base",
      "Creating Databases & Tables",
      "Inserting Data",
      "CRUD Commands",
      "The World Of String Function",
      "The Magic Of Aggregation Function",
    ],
  },
  {
    courseName: "Mastering Python",
    contentList: [
      "Into To Python Programming Language",
      "Python Operators",
      "Python Data Types",
      "Python String Methods & Formatting",
      "Python Data Structure",
      "Pyhton Functions",
      "Python Control Flow Statement",
      "OOP With Python",
    ],
  },
  {
    courseName: "Digital Marketing Course",
    contentList: [
      "Market Research",
      "Make a Website",
      "Email Marketing",
      "Copywriting",
      "Search Engine Optimization (SEO)",
      "Youtube Marketing",
      "Facebook Marketing",
      "Twitter Marketing",
      "Quora Marketing",
    ],
  },
  {
    courseName: "Mastering Cloud Computing",
    contentList: [
      "The Building Blocks Of Cloud Computing",
      "Introduction Ro Cloud Computing",
      "AWS Basics",
      "Amazon Elastic Compute Cloud (EC2)",
      "AWS Storage Services",
      "AWS Database",
      "Automation In AWS",
      "DevOps On AWS",
    ],
  },
  {
    courseName: "Artificial Inteliegence Course",
    contentList: [
      "Machine Learning & Neurons",
      "Artificial Neural Networks",
      "Course Content",
      "Course Content",
      "Course Content",
      "Course Content",
      "Course Content",
    ],
  },
  {
    courseName: "Font-End Workshop",
    contentList: [
      "Create Simple E-commerce Website",
      "Create Landing Page",
      "Create Clothes Page",
      "Create Electonnics Page",
      "Create bags Page",
      "Craete Table & Queries",
    ],
  },
];

// creattNotificationMenu();
showCourseInfoBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const courseTextParagraph =
      e.currentTarget.previousElementSibling.innerText;
    const courseNameH4 =
      e.currentTarget.previousElementSibling.previousElementSibling.innerText;
    const courseImage =
      e.currentTarget.parentElement.previousElementSibling.firstElementChild
        .src;
    const targetImage = courseImage.slice(courseImage.indexOf("imgs"));
    console.log(targetImage);
    let contentLi = [];
    for (let list of allCoursesList) {
      if (list.courseName === courseNameH4) {
        for (let cont of list.contentList) {
          contentLi.push(cont);
        }
      }
    }
    createCourseInfoPopUp(
      courseNameH4,
      courseTextParagraph,
      contentLi,
      targetImage
    );

    document
      .querySelector(".courses-more-info #close-info-btn")
      .addEventListener("click", (e) => {
        document.querySelector(".courses-info-container").remove();
      });
  });
});

/* */
/* */
/* */

// Add Functionality to Fo Friend's Profile Btn
let theAvatar = "",
  theName = "",
  jobTitle = "";
contributionsArr = [];
if (
  window.localStorage.getItem("theAvatar") &&
  window.localStorage.getItem("friendName") &&
  window.localStorage.getItem("jobTitle") &&
  window.localStorage.getItem("contributionsArr")
) {
  theAvatar = window.localStorage.getItem("theAvatar");
  theName = window.localStorage.getItem("friendName");
  jobTitle = window.localStorage.getItem("jobTitle");
  contributionsArr = window.localStorage.getItem("contributionsArr");
} else {
  theAvatar = "imgs/no-photo.png";
  theName = "Unknown";
  jobTitle = "Unknown";
  contributionsArr = [];
}
goFriendProfileBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    theAvatar =
      e.currentTarget.parentElement.parentElement.previousElementSibling
        .previousElementSibling.children[0].src;
    theName =
      e.currentTarget.parentElement.parentElement.previousElementSibling
        .previousElementSibling.children[1].textContent;
    jobTitle =
      e.currentTarget.parentElement.parentElement.previousElementSibling
        .previousElementSibling.children[2].textContent;

    let allContributions =
      e.currentTarget.parentElement.parentElement.previousElementSibling
        .children;

    let [firstCont, secondCont, thirdCont, _] = allContributions;
    firstCont = firstCont.children[1].textContent;
    secondCont = secondCont.children[1].textContent;
    thirdCont = thirdCont.children[1].textContent;

    contributionsArr = [firstCont, secondCont, thirdCont];
    window.localStorage.setItem("theAvatar", `${theAvatar}`);
    window.localStorage.setItem("friendName", `${theName}`);
    window.localStorage.setItem("jobTitle", `${jobTitle}`);
    window.localStorage.setItem("contributionsArr", `${contributionsArr}`);
    window.location.href = `friends_profile.html`;
  });
});

if (document.title.trim().toLowerCase() === "friends profile") {
  const randomRating = Math.floor(Math.random() * 5 + 1);

  // Selsct Element
  const headerName = document.querySelector("h1.main-header");
  const useravatar = document.querySelector(".friend-info .avatar img");
  const userName = document.querySelector(".friend-info .name-info .the-name");
  const userJobTitle = document.querySelector(
    ".friend-info .name-info .job-title"
  );
  const contributionsNum = document.querySelectorAll(
    ".friend-info .friend-contributions > div .cont-number"
  );
  const contributionsName = document.querySelectorAll(
    ".friend-info .friend-contributions > div .cont-name"
  );
  const ratingLi = document.querySelectorAll(".friend-info .rating span");

  // Edit Page Info
  const friendsCont = contributionsArr.split(",");

  headerName.innerText = `${theName} Profile`;
  useravatar.src = theAvatar;
  userName.innerText = `${theName}`;
  userJobTitle.innerText = `${jobTitle}`;

  for (let i = 0; i < randomRating; i++) {
    ratingLi[i].classList.add("active");
  }

  for (let i = 0; i < contributionsName.length; i++) {
    contributionsNum[i].innerText = `${friendsCont[i].slice(
      0,
      friendsCont[i].indexOf(" ")
    )}`;
    contributionsName[i].innerText = `${friendsCont[i].slice(
      friendsCont[i].indexOf(" ") + 1
    )}`;
  }

  headerName.style.cssText = `font-size: 20px;`;
}
