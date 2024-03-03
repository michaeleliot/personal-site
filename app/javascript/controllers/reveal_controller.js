import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["hide"]

  connect() {
  }

  hide() {
    const hideElements = this.hideTargets
    hideElements.forEach(element => {
      element.classList.add("-translate-x-80");
    });
  }

  reveal() {
    const hideElements = this.hideTargets
    hideElements.forEach(element => {
      element.classList.remove("-translate-x-80");
    });
  }
}
