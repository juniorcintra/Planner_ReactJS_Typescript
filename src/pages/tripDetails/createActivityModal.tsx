import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-300 text-lime-950 justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
}
