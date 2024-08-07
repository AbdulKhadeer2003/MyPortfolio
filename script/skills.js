// const rangeBar = document.getElementById('range-bar');
//     const percentageText = document.getElementById('percentageText');
//     const radius = parseFloat(rangeBar.getAttribute('r'));
//     const circumference = 2 * Math.PI * radius;

//     function updateRangeBar(percentage) {
//         const dashOffset = circumference - (percentage / 100) * circumference;
//         rangeBar.style.strokeDashoffset = dashOffset;
//         percentageText.textContent = `${percentage}%`;
//     }

//     // Example: Highlighting 75% dynamically
//     const percentageToHighlight = rangeBar.getAttribute('data-value');
//     updateRangeBar(percentageToHighlight);
const rangeBars = document.querySelectorAll('.range-bar');
    const percentageTexts = document.querySelectorAll('.percentage-text');

    function updateRangeBars() {
        rangeBars.forEach((rangeBar, index) => {
            const percentage = parseFloat(rangeBar.getAttribute('data-value'));
            const radius = parseFloat(rangeBar.getAttribute('r'));
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference - (percentage / 100) * circumference;
            rangeBar.style.strokeDashoffset = dashOffset;
            percentageTexts[index].textContent = `${percentage}%`;
        });
    }

    // Initialize on page load
    updateRangeBars();