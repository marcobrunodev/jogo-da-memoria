const eyeCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                background-image: url(/img/eye.png);
                background-repeat: no-repeat;
                background-position: center;
                display: block;
                text-indent: -9999px;
                width: 24px;
                height: 15px;
                cursor: pointer;
            }
        `

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.handleClick = () => {
        console.log("Ae!!!")
    }

    module.render = ({attrFor = ""}) => {
        module._style()

        return `
            <label 
                for="${attrFor}"
                class="eye-collabcode"
                onClick="eyeCollabcode.handleClick()">Mostrar senha</label>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();