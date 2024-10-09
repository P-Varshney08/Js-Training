let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];

function mergeIntervals(intervals) {
    if(intervals.length===0) return [];
    
    // Sorting by starting point
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let currentInterval = intervals[0];

    for(let i=1; i<intervals.length; i++) {
        let [currentStart, currentEnd] = currentInterval;
        let [nextStart, nextEnd] = intervals[i];

        if(nextStart <= currentEnd) {
            currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
        } else{
            merged.push(currentInterval);
            currentInterval = intervals[i];
        }
    }
    merged.push(currentInterval);
    return merged;
}

const merged = mergeIntervals(arr);
console.log(merged);