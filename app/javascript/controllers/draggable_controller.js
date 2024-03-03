import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dragger"]

  constructor(params) {
    super(params)
    this.isResizing = false;
    this.mousedown = this.mousedown.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mouseup = this.mouseup.bind(this);
  }

  mousedown() {
    this.isResizing = true;
  }

  mousemove(e) {
    if (this.isResizing) {
      const newWidth = e.clientX - this.element.getBoundingClientRect().left;
      this.element.style.width = newWidth + 'px';
    }
  }

  mouseup() {
    this.isResizing = false;
  }

  connect() {
    this.draggerTarget.addEventListener('mousedown', this.mousedown);

    document.addEventListener("mousemove", this.mousemove)

    document.addEventListener('mouseup', this.mouseup);
  }
}
