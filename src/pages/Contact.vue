<template>
  <div class="page container">
    <span class="eyebrow">~/contact</span>
    <h1 class="section-title">Let's work together</h1>
    <p class="section-lede">
      Open to full-stack roles and freelance projects. The form opens your email client with everything
      pre-filled — or reach me directly below.
    </p>

    <div class="contact-layout">
      <div class="card details-card">
        <h3 class="details-title">Contact details</h3>
        <ul class="details-list">
          <li>
            <span class="path">email</span>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
          <li>
            <span class="path">phone</span>
            <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a>
          </li>
          <li>
            <span class="path">location</span>
            <span>{{ profile.location }}</span>
          </li>
          <li>
            <span class="path">linkedin</span>
            <a :href="profile.linkedin" target="_blank" rel="noopener">view profile ↗</a>
          </li>
          <li>
            <span class="path">github</span>
            <a :href="profile.github" target="_blank" rel="noopener">view profile ↗</a>
          </li>
        </ul>
      </div>

      <form class="card form-card" @submit.prevent="submit">
        <h3 class="details-title">Send a message</h3>

        <label class="field">
          <span class="path">name</span>
          <input v-model="name" type="text" placeholder="Your name" required />
        </label>

        <label class="field">
          <span class="path">email</span>
          <input v-model="email" type="email" placeholder="you@example.com" required />
        </label>

        <label class="field">
          <span class="path">message</span>
          <textarea v-model="message" rows="5" placeholder="Tell me about the role or project…" required></textarea>
        </label>

        <button type="submit" class="btn btn-primary submit-btn">Send message</button>
        <p v-if="sent" class="sent-note path">opening your email client…</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { profile } from "../data/resume";

const name = ref("");
const email = ref("");
const message = ref("");
const sent = ref(false);

function submit() {
  const subject = encodeURIComponent(`Portfolio contact from ${name.value || "a visitor"}`);
  const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  sent.value = true;
}
</script>

<style scoped lang="scss">
.contact-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 28px;
  align-items: start;
}

.details-card,
.form-card {
  padding: 30px;
}

.details-title {
  font-size: 18px;
  margin-bottom: 22px;
}

.details-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.details-list li {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 15px;
}

.details-list a {
  color: var(--primary-ink);
  font-weight: 500;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

input,
textarea {
  font-family: var(--font-body);
  font-size: 15px;
  padding: 12px 14px;
  border-radius: var(--radius-s);
  border: 1px solid var(--line-strong);
  background: var(--bg);
  color: var(--ink);
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 4px;
}

.sent-note {
  margin-top: 12px;
  text-align: center;
}

@media (max-width: 860px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .details-card,
  .form-card {
    padding: 22px;
  }

  .details-title {
    font-size: 17px;
  }

  input,
  textarea {
    font-size: 14px;
  }
}
</style>
