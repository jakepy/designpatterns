// Managing the Processes to at most 1

function Process(state) {
    this.state = state // if a process is running, blocked, stopped etc.
}

const Singleton = (function() {
    function ProcessManager() {
        this.numProcess = 0
    }

    let pManager

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }

    return {
        getProcessManager:() => {
            if(!pManager)
                pManager = createProcessManager()
            return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2)
