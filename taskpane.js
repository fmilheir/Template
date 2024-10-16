Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
      document.getElementById('apply-template').onclick = applyTemplate;
  }
});

const meetingTemplate = `
<h2>PURPOSE:</h2>

<h3>BACKGROUND that led to this meeting: (Attach documents or links to help if needed)</h3>

<h3>Expected ACHIEVEMENTS of the Meeting (Facilitate/discuss towards the outcome)</h3>
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>

<h3>AGENDA Items (Including estimated time, can have more than 3)</h3>
<ol>
  <li>( Min)</li>
  <li>( Min)</li>
  <li>Q&A (5 – 10 Min)</li>
</ol>

<h3>Roles of the Meeting:</h3>
<p>Facilitator:</p>
<p>Scribe:</p>
`;

function applyTemplate() {
  Office.context.mailbox.item.body.setAsync(meetingTemplate, { coercionType: Office.CoercionType.Html }, (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
          showStatus('Template applied successfully!', 'success');
      } else {
          showStatus('Failed to apply template. Please try again.', 'error');
      }
  });
}

function showStatus(message, type) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
  statusElement.className = type;
  statusElement.style.display = 'block';

  setTimeout(() => {
      statusElement.style.display = 'none';
  }, 3000);
}