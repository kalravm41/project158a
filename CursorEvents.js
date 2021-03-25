AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["spider_man", "super_man", "pessadilas", "science_fiction"];
      console.log('a')
      if (comicsId.includes(id)) {
        console.log('l')
        const placeContainer = document.querySelector("#places_Container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#1565c0",
        });
      }
    },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", (e) => {
        console.log('k');
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "black",
            });
          }
        }
      });
    },
  });