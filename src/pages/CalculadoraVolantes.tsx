import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LoteriaKey = "megasena" | "lotofacil" | "quina" | "lotomania";

interface LoteriaConfig {
  nome: string;
  baseNumeros: number;
  minNumeros: number;
  maxNumeros: number;
  precoBase: number;
}

const LOTERIAS: Record<LoteriaKey, LoteriaConfig> = {
  megasena: { nome: "Mega-Sena", baseNumeros: 6, minNumeros: 6, maxNumeros: 20, precoBase: 5.0 },
  lotofacil: { nome: "Lotofácil", baseNumeros: 15, minNumeros: 15, maxNumeros: 20, precoBase: 3.5 },
  quina: { nome: "Quina", baseNumeros: 5, minNumeros: 5, maxNumeros: 15, precoBase: 2.5 },
  lotomania: { nome: "Lotomania", baseNumeros: 50, minNumeros: 50, maxNumeros: 50, precoBase: 3.0 },
};

function combinacoes(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k);
  let result = 1;
  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;
  return Math.round(result);
}

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const CalculadoraVolantes = () => {
  const [loteria, setLoteria] = useState<LoteriaKey>("megasena");
  const [numerosSelecionados, setNumerosSelecionados] = useState(6);
  const [precoJogo, setPrecoJogo] = useState(5.0);
  const [quantidadeVolantes, setQuantidadeVolantes] = useState(1);

  const config = LOTERIAS[loteria];

  const jogosPorVolante = useMemo(
    () => combinacoes(numerosSelecionados, config.baseNumeros),
    [numerosSelecionados, config.baseNumeros],
  );

  const totalJogos = jogosPorVolante * quantidadeVolantes;
  const totalCusto = totalJogos * precoJogo;

  const handleLoteria = (v: LoteriaKey) => {
    setLoteria(v);
    setNumerosSelecionados(LOTERIAS[v].baseNumeros);
    setPrecoJogo(LOTERIAS[v].precoBase);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Calculadora de Volantes</CardTitle>
          <p className="text-center text-muted-foreground text-sm">
            Calcule quantos jogos e o custo total do seu volante
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Loteria</Label>
            <Select value={loteria} onValueChange={(v) => handleLoteria(v as LoteriaKey)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(LOTERIAS) as LoteriaKey[]).map((k) => (
                  <SelectItem key={k} value={k}>
                    {LOTERIAS[k].nome} ({LOTERIAS[k].baseNumeros} dezenas)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="numeros">
              Números marcados por volante ({config.minNumeros}–{config.maxNumeros})
            </Label>
            <Input
              id="numeros"
              type="number"
              min={config.minNumeros}
              max={config.maxNumeros}
              value={numerosSelecionados}
              onChange={(e) =>
                setNumerosSelecionados(
                  Math.max(
                    config.minNumeros,
                    Math.min(config.maxNumeros, Number(e.target.value) || 0),
                  ),
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preco">Preço por jogo (R$)</Label>
              <Input
                id="preco"
                type="number"
                step="0.01"
                min={0}
                value={precoJogo}
                onChange={(e) => setPrecoJogo(Number(e.target.value) || 0)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qtd">Quantidade de volantes</Label>
              <Input
                id="qtd"
                type="number"
                min={1}
                value={quantidadeVolantes}
                onChange={(e) =>
                  setQuantidadeVolantes(Math.max(1, Number(e.target.value) || 1))
                }
              />
            </div>
          </div>

          <div className="rounded-lg border bg-muted/40 p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Jogos por volante</span>
              <span className="font-medium">{jogosPorVolante.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total de jogos</span>
              <span className="font-medium">{totalJogos.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex justify-between text-lg pt-2 border-t">
              <span className="font-semibold">Custo total</span>
              <span className="font-bold text-primary">{formatBRL(totalCusto)}</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setNumerosSelecionados(config.baseNumeros);
              setPrecoJogo(config.precoBase);
              setQuantidadeVolantes(1);
            }}
          >
            Limpar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculadoraVolantes;
