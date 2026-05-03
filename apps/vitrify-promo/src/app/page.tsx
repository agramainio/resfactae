const evidenceSlots = [
  {
    label: "production queues",
    caption:
      "See what needs firing, glazing, remake, review, pickup, or release into stock.",
  },
  {
    label: "piece detail",
    caption:
      "A single physical piece with its status, context, firing history, ownership, notes, and failure outcome.",
  },
  {
    label: "firing batch",
    caption:
      "Record what entered the kiln, what came out, what failed, and what needs to move forward.",
  },
];

const operationalQuestions = [
  "what needs firing",
  "what needs glazing",
  "what is ready",
  "what failed",
  "what needs remake",
  "what belongs to a student",
  "what is blocked for a client",
  "what is actually available as stock",
];

const pieceRows = [
  ["piece", "small mug / 0472"],
  ["status", "to glaze"],
  ["production context", "Friday evening class"],
  ["firing history", "bisque completed"],
  ["destination", "student work"],
  ["failure outcome", "none"],
];

const queueRows = [
  ["to fire", "Pieces waiting for bisque or glaze firing."],
  ["to glaze", "Pieces that came out of firing and need the next surface step."],
  [
    "ready",
    "Finished pieces available for stock, pickup, sale, delivery, or class return.",
  ],
  [
    "failed",
    "Pieces with a recorded failure reason, production stage, loss value, and remake need.",
  ],
  [
    "blocked",
    "Client or custom-order work waiting on a decision, remake, missing piece, or failed outcome.",
  ],
  [
    "available stock",
    "Only pieces that are actually ready and not sold, reserved, missing, failed, or blocked.",
  ],
];

const contextRows = [
  ["stock", "Pieces made for sale, reservation, delivery, or storage."],
  ["student work", "Pieces connected to a person, class, or workshop."],
  ["classes", "Group output without losing track of individual pieces."],
  ["custom orders", "Client work with status, failures, remakes, and completion."],
  ["tests", "Forms, colors, glaze trials, samples, and uncertain work."],
  ["external pieces", "Brought-in work that enters the atelier’s kiln process."],
];

const firingRows = [
  ["firing batch", "glaze firing / kiln 2"],
  ["loaded pieces", "36"],
  ["moved forward", "31"],
  ["failed", "3"],
  ["needs remake", "2"],
  ["next queue", "ready / remake / review"],
];

const failureRows = [
  [
    "reason",
    "cracked, broken, warped, glaze defect, kiln accident, handling damage, lost, discarded, or other",
  ],
  ["stage", "where the failure happened in production"],
  ["loss", "estimated value or production impact"],
  ["remake", "whether a replacement is needed"],
  ["linked work", "student, class, client, order, stock, test, or external piece"],
];

const longTermRows = [
  "which forms fail often",
  "which firing batches caused problems",
  "which custom orders required remakes",
  "which class pieces are still waiting",
  "which stock is ready but not moving",
  "which tests are worth repeating",
  "which external pieces are still in process",
];

export default function Home() {
  return (
    <main className="site">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="vitrify homepage">
          vitrify
        </a>
        <nav aria-label="Main navigation">
          <a href="#screens">screens</a>
          <a href="#problem">problem</a>
          <a href="#piece-data">piece data</a>
          <a href="#firings">firings</a>
        </nav>
        <a className="navCta" href="https://vitrify.app">
          Start using vitrify
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">production journal</p>

        <div className="heroGrid">
          <div>
            <p className="heroProductName">vitrify</p>
            <h1>Production journal for ceramic ateliers.</h1>
          </div>

          <div className="heroCopy">
            <p>
              Record pieces, firings, failures, stock, student work, custom
              orders, tests, and external pieces in one structured production
              tool.
            </p>
            <p>
              vitrify helps an atelier know what exists, what state it is in,
              what needs attention next, and what happened before — without
              relying on notebooks, Excel files, Google Sheets, shelf labels, or
              someone remembering.
            </p>

            <div className="ctaRow">
              <a className="buttonPrimary" href="https://vitrify.app">
                Start using vitrify
              </a>
              <a className="buttonSecondary" href="#how">
                See how it works
              </a>
            </div>

            <p className="supportLine">
              No app store. Open the PWA and use it from the atelier.
            </p>
          </div>
        </div>
      </section>

      <section className="section evidenceSection" id="screens">
        <div className="sectionHead">
          <p className="eyebrow">current app</p>
          <h2>Real production screens. No mockups.</h2>
        </div>

        <div className="copyBlock">
          <p>Screens from the working app: queues, piece details, and firing batches.</p>

          <div className="evidenceGrid">
            {evidenceSlots.map((slot) => (
              <article className="evidencePanel" key={slot.label}>
                <div className="screenshotArea" aria-hidden="true" />
                <div className="panelMeta">
                  <span>{slot.label}</span>
                  <span>current app</span>
                </div>
                <p>{slot.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="problem">
        <div className="sectionHead">
          <p className="eyebrow">problem</p>
          <h2>Ceramic production is easy to lose track of.</h2>
        </div>

        <div className="copyBlock">
          <p>
            Pieces wait on shelves. They move in batches. They change state
            after firing. They fail, get remade, belong to students, wait for
            clients, become stock, or disappear into a spreadsheet column that
            no one updates.
          </p>
          <p>
            Most ateliers already track this work somehow: notebooks, Excel
            files, Google Sheets, messages, shelf labels, memory, or habit.
          </p>
          <p>
            vitrify makes the tracking structured, current, and easier to use
            during the working day.
          </p>

          <div className="questionList">
            <p className="listIntro">At any moment, the atelier needs to know:</p>
            {operationalQuestions.map((question) => (
              <p key={question}>{question}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="piece-data">
        <div className="sectionHead">
          <p className="eyebrow">piece data</p>
          <h2>One physical piece. One data entry.</h2>
        </div>

        <div className="copyBlock">
          <p>vitrify tracks ceramic production at object level.</p>
          <p>
            If five identical bowls are made, they can be grouped for easier
            reading, but they are still five physical pieces. Each one can have
            its own status, firing path, failure outcome, owner, destination,
            and history.
          </p>
          <p>This matters because ceramic production does not fail in perfect spreadsheet rows.</p>

          <div className="recordRows">
            {pieceRows.map(([label, value]) => (
              <div className="recordRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="sectionHead">
          <p className="eyebrow">daily use</p>
          <h2>Know the next production action.</h2>
        </div>

        <div className="copyBlock">
          <p>
            vitrify is not meant to be noticed all day. It is meant to answer
            practical questions quickly.
          </p>
          <p>
            Open it, check the queue, update the status, record the firing, mark
            the failure, confirm the stock, move on.
          </p>

          <div className="contextGrid">
            {queueRows.map(([label, description]) => (
              <div className="contextRow" key={label}>
                <span>{label}</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">atelier work</p>
          <h2>Not everything in an atelier is inventory.</h2>
        </div>

        <div className="copyBlock">
          <p>
            A ceramic atelier handles different kinds of work at the same time.
            Stock, student pieces, class output, custom orders, tests, and
            external pieces do not behave the same way.
          </p>
          <p>
            vitrify keeps them separate enough to be useful, but together enough
            to manage production.
          </p>

          <div className="contextGrid">
            {contextRows.map(([label, description]) => (
              <div className="contextRow" key={label}>
                <span>{label}</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="firings">
        <div className="sectionHead">
          <p className="eyebrow">firings</p>
          <h2>Firings update the production data.</h2>
        </div>

        <div className="copyBlock">
          <p>A firing is not just a date. It changes the state of many pieces at once.</p>
          <p>
            vitrify records which pieces entered the kiln, which kiln was used,
            what kind of firing it was, which pieces moved forward, which pieces
            failed, and which pieces need remake or review.
          </p>

          <div className="statRows">
            {firingRows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">failure data</p>
          <h2>Failures are production data.</h2>
        </div>

        <div className="copyBlock">
          <p>
            Ceramic failures are not just mistakes. They affect stock, client
            work, class output, remake needs, pricing, capacity, and planning.
          </p>
          <p>
            vitrify lets the atelier record failed pieces with reason, stage,
            notes, estimated loss, and remake need — without deleting the piece
            from the production history.
          </p>

          <div className="recordRows">
            {failureRows.map(([label, value]) => (
              <div className="recordRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">over time</p>
          <h2>The data gets more useful over time.</h2>
        </div>

        <div className="copyBlock">
          <p>
            vitrify is useful on the first day because it shows the current
            state of production.
          </p>
          <p>
            It becomes more useful over time because the atelier can look back
            at real production data: firing outcomes, repeated failures, remake
            patterns, stock movement, class output, custom-order issues, and
            forms or colors that regularly create problems.
          </p>
          <p>Not vanity metrics. Operational data from the work itself.</p>

          <div className="questionList">
            {longTermRows.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">start</p>
        <h2>A production journal for the work already happening.</h2>
        <p>
          vitrify helps ceramic ateliers record production data as pieces move
          through making, firing, glazing, failure, remake, stock, class, client
          work, and tests.
        </p>
        <p>No app store. No download. Open the PWA and use it from the atelier.</p>

        <div className="ctaRow">
          <a className="buttonPrimary" href="https://vitrify.app">
            Start using vitrify
          </a>
          <a className="buttonSecondary" href="#screens">
            See how it works
          </a>
        </div>
      </section>
    </main>
  );
}