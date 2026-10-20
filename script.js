const billingToggle = document.getElementById("billing-toggle");
const priceValues = document.querySelectorAll(".price-value");
const billingPeriods = document.querySelectorAll(".billing-period");

let isYearly = false;

billingToggle.addEventListener("click", function () {
    // Switch the billing cycle
    isYearly = !isYearly;

    // Update each plan's price
    priceValues.forEach(function (price) {
        if (isYearly) {
            price.textContent = Number(
                price.dataset.yearly
            ).toLocaleString("en-IN");
        } else {
            price.textContent = Number(
                price.dataset.monthly
            ).toLocaleString("en-IN");
        }
    });

    // Update the billing period labels
    billingPeriods.forEach(function (period) {
        period.textContent = isYearly ? "/year" : "/month";
    });

    // Update the button label and accessibility state
    billingToggle.textContent = isYearly
        ? "Switch to Monthly"
        : "Switch to Yearly";

    billingToggle.setAttribute(
        "aria-pressed",
        String(isYearly)
    );
});