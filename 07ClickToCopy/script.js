const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault();

    /*
        coupon.select();
        coupon.setSelectionRange(0, 999999);
        document.execCommand("copy");
    */
// execCommand is deprecated. Instead of that we use the navigator.
// navigator.clipboard.writeText() return a Promise. So we use .then() to do what we want to do before.
    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.textContent = "Copied!!!";
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 3000);
    })
};

btn.addEventListener("click", copyText);
