// WorkAttend - Basic Login System

function contractorLogin() {
  const id = prompt("Contractor ID डालें:");
  const password = prompt("Password डालें:");

  if (!id || !password) {
    alert("कृपया ID और Password दोनों डालें।");
    return;
  }

  // अभी Demo Login
  if (id === "OWNER001" && password === "1234") {
    alert("Contractor Login सफल! Welcome to WorkAttend.");
  } else {
    alert("गलत Contractor ID या Password");
  }
}

function workerLogin() {
  const id = prompt("Worker ID डालें:");
  const password = prompt("Password डालें:");

  if (!id || !password) {
    alert("कृपया Worker ID और Password दोनों डालें।");
    return;
  }

  // अभी Demo Login
  if (id === "WORKER001" && password === "1234") {
    alert("Worker Login सफल! Welcome to WorkAttend.");
  } else {
    alert("गलत Worker ID या Password");
  }
}
