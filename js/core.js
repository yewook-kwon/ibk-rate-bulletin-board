//시간
$(document).ready(function () {
  function updateClock() {
    var now = new Date();

    // 날짜 정보 가져오기
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
    var day = now.getDate();
    var weekDay = now.getDay(); // 요일 정보 가져오기

    // 요일 배열 생성
    var weekDays = ["일", "월", "화", "수", "목", "금", "토"];

    // 시간 정보 가져오기
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var period = "AM";

    // 12시간 형식으로 변환
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) hours -= 12;
    }
    if (hours == 0) {
      hours = 12;
    }

    // 한 자리 숫자일 경우 앞에 0을 추가
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    //if (seconds < 10) seconds = '0' + seconds;

    // 날짜와 시간 형식 지정
    var formattedDate =
      year + ". " + month + ". " + day + "" + "(" + weekDays[weekDay] + ")";
    var formattedTime = hours + ":" + minutes;

    // HTML 요소에 업데이트
    $(".date").text(formattedDate);
    $(".time").text(formattedTime);
    $(".ampm").text(period);
  }

  // 처음 로드 시 한 번 실행
  updateClock();

  // 매 초마다 updateClock 함수 실행
  setInterval(updateClock, 1000);
});

//차트1
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line", // 차트 타입을 'line'으로 설정
  data: {
    labels: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    datasets: [
        {
          // 첫 번째 라인 데이터
          data: [20, 22, 24, 32, 14, 52], // 데이터 값
          borderColor: "rgba(175, 113, 35, 1)", // 선의 색상 (파란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 두 번째 라인 데이터
          data: [30, 35, 33, 45, 22, 60], // 데이터 값
          borderColor: "rgba(57, 149, 222, 1)", // 선의 색상 (빨간색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 세 번째 라인 데이터
          data: [25, 28, 30, 40, 18, 55], // 데이터 값
          borderColor: "rgba(119, 114, 20, 1)", // 선의 색상 (녹색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 네 번째 라인 데이터
          data: [15, 20, 18, 35, 10, 48], // 데이터 값
          borderColor: "rgba(54, 135, 45, 1)", // 선의 색상 (노란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
      ],
  },
  options: {
    responsive: true, // 차트 크기 자동 조정
    scales: {
      y: {
        beginAtZero: true, // Y축이 0부터 시작
        max: 100, // Y축의 최대값을 100으로 설정
        ticks: {
          stepSize: 25, // 25% 단위로 설정
          callback: function (value) {
            return value + "%"; // 숫자 뒤에 % 추가
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례(label) 숨김
      },
    },
  },
});

//차트2
const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "line", // 차트 타입을 'line'으로 설정
  data: {
    labels: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    datasets: [
        {
          // 첫 번째 라인 데이터
          data: [20, 22, 24, 32, 14, 52], // 데이터 값
          borderColor: "rgba(175, 113, 35, 1)", // 선의 색상 (파란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 두 번째 라인 데이터
          data: [30, 35, 33, 45, 22, 60], // 데이터 값
          borderColor: "rgba(57, 149, 222, 1)", // 선의 색상 (빨간색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 세 번째 라인 데이터
          data: [25, 28, 30, 40, 18, 55], // 데이터 값
          borderColor: "rgba(119, 114, 20, 1)", // 선의 색상 (녹색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 네 번째 라인 데이터
          data: [15, 20, 18, 35, 10, 48], // 데이터 값
          borderColor: "rgba(54, 135, 45, 1)", // 선의 색상 (노란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
      ],
  },
  options: {
    responsive: true, // 차트 크기 자동 조정
    scales: {
      y: {
        beginAtZero: true, // Y축이 0부터 시작
        max: 100, // Y축의 최대값을 100으로 설정
        ticks: {
          stepSize: 25, // 25% 단위로 설정
          callback: function (value) {
            return value + "%"; // 숫자 뒤에 % 추가
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례(label) 숨김
      },
    },
  },
});

//차트2
const ctx3 = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "line", // 차트 타입을 'line'으로 설정
  data: {
    labels: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    datasets: [
        {
          // 첫 번째 라인 데이터
          data: [20, 22, 24, 32, 14, 52], // 데이터 값
          borderColor: "rgba(175, 113, 35, 1)", // 선의 색상 (파란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 두 번째 라인 데이터
          data: [30, 35, 33, 45, 22, 60], // 데이터 값
          borderColor: "rgba(57, 149, 222, 1)", // 선의 색상 (빨간색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 세 번째 라인 데이터
          data: [25, 28, 30, 40, 18, 55], // 데이터 값
          borderColor: "rgba(119, 114, 20, 1)", // 선의 색상 (녹색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
        {
          // 네 번째 라인 데이터
          data: [15, 20, 18, 35, 10, 48], // 데이터 값
          borderColor: "rgba(54, 135, 45, 1)", // 선의 색상 (노란색)
          borderWidth: 2, // 선의 두께
          fill: false, // 채우기 비활성화
        },
      ],
  },
  options: {
    responsive: true, // 차트 크기 자동 조정
    scales: {
      y: {
        beginAtZero: true, // Y축이 0부터 시작
        max: 100, // Y축의 최대값을 100으로 설정
        ticks: {
          stepSize: 25, // 25% 단위로 설정
          callback: function (value) {
            return value + "%"; // 숫자 뒤에 % 추가
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례(label) 숨김
      },
    },
  },
});

//차트4
const ctx4 = document.getElementById("myChart4").getContext("2d");
const myChart4 = new Chart(ctx4, {
  type: "line", // 차트 타입을 'line'으로 설정
  data: {
    labels: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"], // X축 레이블
    datasets: [
      {
        // 첫 번째 라인 데이터
        data: [20, 22, 24, 32, 14, 52], // 데이터 값
        borderColor: "rgba(175, 113, 35, 1)", // 선의 색상 (파란색)
        borderWidth: 2, // 선의 두께
        fill: false, // 채우기 비활성화
      },
      {
        // 두 번째 라인 데이터
        data: [30, 35, 33, 45, 22, 60], // 데이터 값
        borderColor: "rgba(57, 149, 222, 1)", // 선의 색상 (빨간색)
        borderWidth: 2, // 선의 두께
        fill: false, // 채우기 비활성화
      },
      {
        // 세 번째 라인 데이터
        data: [25, 28, 30, 40, 18, 55], // 데이터 값
        borderColor: "rgba(119, 114, 20, 1)", // 선의 색상 (녹색)
        borderWidth: 2, // 선의 두께
        fill: false, // 채우기 비활성화
      },
      {
        // 네 번째 라인 데이터
        data: [15, 20, 18, 35, 10, 48], // 데이터 값
        borderColor: "rgba(54, 135, 45, 1)", // 선의 색상 (노란색)
        borderWidth: 2, // 선의 두께
        fill: false, // 채우기 비활성화
      },
    ],
  },
  options: {
    responsive: true, // 차트 크기 자동 조정
    scales: {
      y: {
        beginAtZero: true, // Y축이 0부터 시작
        max: 100, // Y축의 최대값을 100으로 설정
        ticks: {
          stepSize: 25, // 25% 단위로 설정
          callback: function (value) {
            return value + "%"; // 숫자 뒤에 % 추가
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례(label) 숨김
      },
    },
  },
});
