"use client";

export function Content() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">Features</time>
          <div className="text-lg font-black">Travel to earn</div>
          "Travel to Earn" is an innovative platform designed to revolutionize the travel experience by offering
          individuals the opportunity to earn rewards while exploring new destinations. With Travel to Earn, users can
          embark on exciting journeys while simultaneously minting valuable NFTs and get token rewards, or other
          incentives that can be redeemed for various rewards.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Usage Instructions</time>
          <div className="text-lg font-black">
            Travel-{">"}Select-{">"}Upload-{">"}Rewards
          </div>
          Travel to famous scenic destinations, check in at iconic landmarks, upload check-in data, and earn official
          Mint NFT rewards. Also if you find a new cool spot, Don't hesitate to fill more information and checkin right
          away with photo and ratings. Then you can get rewards after the community vote on your sharings.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">Reward System</time>
          <div className="text-lg font-black">Vote for Reward</div>
          Contribution Rewards, Reputation Rewards and Peer Review Process.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Depin Model</time>
          <div className="text-lg font-black">Data Verification & Content Quality</div>
          By adopting DePIN, we can elevate the quality and granularity of geospatial data collected through the
          platform.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">Privacy</time>
          <div className="text-lg font-black">Zero-Knowledge Proofs</div>
          Utilize zero-knowledge proofs for off-chain data verification to ensure the authenticity of the data.
        </div>
      </li>
    </ul>
  );
}
