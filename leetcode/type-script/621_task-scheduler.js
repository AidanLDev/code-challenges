function leastInterval(tasks, n) {
    var taskCount = {};
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        if (taskCount[task]) {
            taskCount[task]++;
        }
        else {
            taskCount[task] = 1;
        }
    }
    var count = 0;
    var coolDowns = [];
    while (Object.values(taskCount).some(function (val) { return val > 0; })) {
        console.log("About to start next loop, current coolDowns; ", coolDowns);
        count++;
        for (var _a = 0, coolDowns_1 = coolDowns; _a < coolDowns_1.length; _a++) {
            var coolDownObject = coolDowns_1[_a];
            coolDownObject.turns--;
        }
        if (coolDowns.length > 0 && coolDowns[0].turns === 0)
            coolDowns.shift();
        var _loop_1 = function (task) {
            if (coolDowns.filter(function (coolDown) { return coolDown.letter === task; }).length === 0) {
                coolDowns.push({ letter: task, turns: n + 1 });
                taskCount[task]--;
                if (taskCount[task] === 0)
                    delete taskCount[task];
                return "break";
            }
        };
        for (var task in taskCount) {
            var state_1 = _loop_1(task);
            if (state_1 === "break")
                break;
        }
    }
    console.log("Finished looping the taskCounts: ", taskCount);
    return count;
}
var tasks1 = ["A", "A", "A", "B", "B", "B"];
var n1 = 2;
var taskSchedulerResult1 = leastInterval(tasks1, n1);
console.log("res1: ", taskSchedulerResult1);
