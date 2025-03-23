Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Failed to execute 'matches'") && err.message.includes(':modal')) {
      return false; // предотвращает падение тестов
    }
  });
