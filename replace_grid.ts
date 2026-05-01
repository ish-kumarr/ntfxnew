import * as fs from 'fs';

const filePath = '/Users/apple/Documents/tradefxservicesnew/app/markets/crypto/page.tsx';
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');

// Find start and end indices
const startIdx = lines.findIndex(l => l.includes('{/* ── Dribbble-Style Bento Grid (Pure CSS/Abstract) ── */}'));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('</section>')) - 2;

if (startIdx !== -1 && endIdx !== -1) {
    const replacement = `                    {/* ── MagicUI Bento Grid ── */}
                    <div className="max-w-[1100px] mx-auto mt-12 w-full">
                        <BentoGrid className="lg:grid-cols-3">
                            <BentoCard
                                name="Bitcoin & The Genesis Block"
                                description="The first decentralized cryptocurrency. Operating on a proof-of-work network, Bitcoin has a hard-capped supply of exactly 21 million BTC, creating absolute mathematical scarcity."
                                href="/register"
                                cta="Explore Bitcoin Protocol"
                                Icon={Coins}
                                className="col-span-3 lg:col-span-2"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2E62FF]/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Ethereum Virtual Machine"
                                description="Unlike standard networks, Ethereum acts as a globally distributed computer. Complex conditional logic—Smart Contracts—can be deployed natively, powering DeFi."
                                href="/register"
                                cta="Discover Smart Contracts"
                                Icon={Cpu}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Cryptographic Security"
                                description="Blockchain data is secured by complex mathematics. Utilizing algorithms like SHA-256 and asymmetric cryptography, every transaction is securely signed."
                                href="/register"
                                cta="Learn Cryptography"
                                Icon={ShieldCheck}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00ffd1]/5 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="24/7 Global Markets"
                                description="The blockchain never sleeps. Transact and transfer value globally without closing bells, weekend pauses, or centralized circuit breakers."
                                href="/register"
                                cta="View Markets"
                                Icon={Globe}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Decentralized Finance (DeFi)"
                                description="DeFi algorithms utilize smart contracts to recreate traditional financial instruments. Code becomes law, allowing trustless asset swaps using liquidity pools."
                                href="/register"
                                cta="Explore DeFi"
                                Icon={Repeat}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                        </BentoGrid>
                    </div>`;
    
    lines.splice(startIdx, endIdx - startIdx + 1, replacement);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    console.log('Successfully replaced BentoGrid section!');
} else {
    console.log('Error finding indices. Start:', startIdx, 'End:', endIdx);
}
