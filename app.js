var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Tokyo", "Paris", "Hawaii", "Rome", "New York"];
// Print array in its original order
console.log("Original order:", placesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Show that the original order is maintained
console.log("Original order after sorting:", placesToVisit);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original order is maintained
console.log("Original order after sorting in reverse alphabetical order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
