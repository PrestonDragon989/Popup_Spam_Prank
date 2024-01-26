class Popup {
    constructor(name, URL) {
      this.name = name;
      this.URL = URL;
      this.fail_safe = {
        j: false,
        k: false,
        l: false,
      };
      this.continue_popups = true;
      this.popup_start();
    }
  
    failsafe_launchers() {
      document.addEventListener("keydown", (event) => {
        if (event.key === "j") {
          this.fail_safe.j = true;
        }
        if (event.key === "k") {
          this.fail_safe.k = true;
        }
        if (event.key === "l") {
          this.fail_safe.l = true;
        }
      });
  
      document.addEventListener("keyup", (event) => {
        if (event.key === "j") {
          this.fail_safe.j = false;
        }
        if (event.key === "k") {
          this.fail_safe.k = false;
        }
        if (event.key === "l") {
          this.fail_safe.l = false;
        }
      });
    }
  
    check_failsafe() {
      if (this.fail_safe.j && this.fail_safe.k && this.fail_safe.l) {
        this.continue_popups = false;
      }
    }
  
    popup(URL) {
      window.open(URL);
    }
  
    popup_start() {
      this.failsafe_launchers();
      
      // Use setTimeout to avoid blocking the event loop
      const popupInterval = setInterval(() => {
        this.check_failsafe();
  
        if (!this.continue_popups) {
          clearInterval(popupInterval); // Stop the interval when continue_popups is false
        } else {
          this.popup(this.URL);
        }
      }, 1000); // Adjust the interval as needed
    }
}
  
const popup_launcher = new Popup(
    "Jolly Good fun",

    // Change this URL
    // V V V V V V V V V V V V V V V V V V V V V
    "https://www.google.com/search?q=frog&rlz=1CAPPDO_enUS1085&oq=frog&aqs=chrome..69i57j35i39j35i39i512i650j69i60l2j69i61l3.627j0j7&sourceid=chrome&ie=UTF-8"
    // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
);  