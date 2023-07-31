<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB0leWWFFSKM74mQQNPMR5Ti2by309NRdI",
    authDomain: "b-hpp-dbd00.firebaseapp.com",
    projectId: "b-hpp-dbd00",
    storageBucket: "b-hpp-dbd00.appspot.com",
    messagingSenderId: "1057865240718",
    appId: "1:1057865240718:web:ea9c80cf3f27b598e139df",
    measurementId: "G-62TMQWN6FF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>